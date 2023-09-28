const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { userSubscriptionInputDeleteSchema } from "@/lib/schemas/UserSubscriptionSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att ta bort ett användar abonemang",
      }),
      {
        status: 417,
      },
    );
  }

  const userSubscriptionValidation =
  userSubscriptionInputDeleteSchema.safeParse(data);

  if (!userSubscriptionValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const userSubscriptionData = userSubscriptionValidation.data;

  const { error: UserSubscriptionDeleteError } = await supabase
    .from("users_subscriptions")
    .delete()
    .eq("id", userSubscriptionData.id)
    .select();

  if (UserSubscriptionDeleteError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Användarens abonnemang borttaget" }), {
    status: 200,
  });
};

export { POST, dynamic };

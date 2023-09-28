const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { userSubscriptionInputUpdateSchema } from "@/lib/schemas/UserSubscriptionSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att ändra",
      }),
      {
        status: 417,
      },
    );
  }

  const userSubscriptionValidation =
    userSubscriptionInputUpdateSchema.safeParse(data);

  if (!userSubscriptionValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const userSubscriptionData = userSubscriptionValidation.data;

  const { error: UserSubscriptionUpdateError } = await supabase
    .from("users_subscriptions")
    .update({
      subscription_id: userSubscriptionData.subscriptionID,
    })
    .eq("id", userSubscriptionData.id)
    .select();

  if (UserSubscriptionUpdateError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "uppdaterat" }), {
    status: 200,
  });
};

export { POST, dynamic };

const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { subscriptionInputDeleteSchema } from "@/lib/schemas/SubscriptionSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att ta bort ett abonemang",
      }),
      {
        status: 417,
      },
    );
  }

  const subscriptionValidation = subscriptionInputDeleteSchema.safeParse(data);

  if (!subscriptionValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const subscriptionData = subscriptionValidation.data;

  const { error: SubscriptionDeleteError } = await supabase
    .from("subscriptions")
    .delete()
    .eq("id", subscriptionData.id)
    .select();

  if (SubscriptionDeleteError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Abonemang borttaget" }), {
    status: 200,
  });
};

export { POST, dynamic };

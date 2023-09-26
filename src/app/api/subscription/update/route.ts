const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { subscriptionInputUpdateSchema } from "@/lib/schemas/SubscriptionSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att ändra ett abonemang",
      }),
      {
        status: 417,
      },
    );
  }

  const subscriptionValidation = subscriptionInputUpdateSchema.safeParse(data);

  if (!subscriptionValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const subscriptionData = subscriptionValidation.data;

  const { error: SubscriptionUpdateError } = await supabase
    .from("subscriptions")
    .update({
      service_id: subscriptionData.serviceID,
      plan: subscriptionData.plan,
    })
    .eq("id", subscriptionData.id)
    .select();

  if (SubscriptionUpdateError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Abonemang uppdaterad" }), {
    status: 200,
  });
};

export { POST, dynamic };

const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { subscriptionPriceInputUpdateSchema } from "@/lib/schemas/SubscriptionPriceSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att ändra ett pris",
      }),
      {
        status: 417,
      },
    );
  }

  const subscriptionPriceValidation =
    subscriptionPriceInputUpdateSchema.safeParse(data);

  if (!subscriptionPriceValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const subscriptionPriceData = subscriptionPriceValidation.data;

  const { error: SubscriptionPriceUpdateError } = await supabase
    .from("subscriptions_prices")
    .update({
      subscription_id: subscriptionPriceData.subscriptionID,
      created_at: subscriptionPriceData.createdAt,
      price_per_month: subscriptionPriceData.pricePerMonth,
    })
    .eq("id", subscriptionPriceData.id)
    .select();

  if (SubscriptionPriceUpdateError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Pris uppdaterat" }), {
    status: 200,
  });
};

export { POST, dynamic };

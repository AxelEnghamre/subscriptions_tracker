const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { subscriptionPriceInputSchema } from "@/lib/schemas/SubscriptionPriceSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att skapa pris data",
      }),
      {
        status: 417,
      },
    );
  }

  const subscriptionPriceValidation =
    subscriptionPriceInputSchema.safeParse(data);

  if (!subscriptionPriceValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const subscriptionPriceData = subscriptionPriceValidation.data;

  const { error: SubscriptionPriceInsertError } = await supabase
    .from("subscriptions_prices")
    .insert([
      {
        subscription_id: subscriptionPriceData.subscriptionID,
        price_per_month: subscriptionPriceData.pricePerMonth,
        created_at: subscriptionPriceData.createdAt,
      },
    ])
    .select();

  if (SubscriptionPriceInsertError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Pris skapad" }), {
    status: 200,
  });
};

export { POST, dynamic };

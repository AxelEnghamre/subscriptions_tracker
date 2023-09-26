const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { subscriptionPriceInputDeleteSchema } from "@/lib/schemas/SubscriptionPriceSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att ta bort ett pris",
      }),
      {
        status: 417,
      },
    );
  }

  const subscriptionPriceValidation =
    subscriptionPriceInputDeleteSchema.safeParse(data);

  if (!subscriptionPriceValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const subscriptionPriceData = subscriptionPriceValidation.data;

  const { error: SubscriptionPriceDeleteError } = await supabase
    .from("subscriptions_prices")
    .delete()
    .eq("id", subscriptionPriceData.id)
    .select();

  if (SubscriptionPriceDeleteError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Pris borttaget" }), {
    status: 200,
  });
};

export { POST, dynamic };

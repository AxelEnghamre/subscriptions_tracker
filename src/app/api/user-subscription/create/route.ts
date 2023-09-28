const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { userSubscriptionInputSchema } from "@/lib/schemas/UserSubscriptionSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att lägga till ett abonemang",
      }),
      {
        status: 417,
      },
    );
  }

  const userSubscriptionValidation =
    userSubscriptionInputSchema.safeParse(data);

  if (!userSubscriptionValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const userSubscriptionData = userSubscriptionValidation.data;

  const { error: UserSubscriptionInsertError } = await supabase
    .from("user_subscriptions")
    .insert([
      {
        subscription_id: userSubscriptionData.subscriptionID,
        user_id: session.user.id,
        start_date: userSubscriptionData.startDate,
        renewal_date: userSubscriptionData.renewalDate,
        notice_period_months: userSubscriptionData.noticePeriodMonths,
      },
    ])
    .select();

  if (UserSubscriptionInsertError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Abonemang skapat" }), {
    status: 200,
  });
};

export { POST, dynamic };

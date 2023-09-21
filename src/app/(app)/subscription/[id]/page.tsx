const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import GoHomeButton from "@/components/UI/buttons/GoHomeButton";
import PriceHistory from "@/components/UI/charts/PriceHistory";

const Subscription = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return <p>No session</p>;
  }

  const { data: subscription } = await supabase
    .schema("public")
    .from("users_subscriptions")
    .select(
      `
      id,
      start_date,
      renewal_date,
      notice_period_months, 
      subscriptions(
        plan,
        services(
          id,
          name,
          website_url
          ),
        subscriptions_prices(
          id,
          price_per_month,
          created_at
        )
      )
      `,
    )
    .eq("user_id", session.user.id)
    .eq("id", id)
    .single();

  const pricePerMonth =
    subscription?.subscriptions?.subscriptions_prices.at(-1)?.price_per_month ??
    0;

  const subscriptionPrices =
    subscription?.subscriptions?.subscriptions_prices.map(
      (subscriptionPrice) => {
        return {
          createdAt: subscriptionPrice.created_at,
          pricePerMonth: subscriptionPrice.price_per_month ?? 0,
        };
      },
    );

  return (
    <>
      <GoHomeButton />
      <div className="w-full px-6 flex flex-col gap-5 items-center">
        <p>Icon here</p>
        <p>{subscription?.subscriptions?.services?.name}</p>
        <p>category here</p>
        <div className="flex flex-row gap-2 items-center">
          <div className=" bg-searchbar-foreground rounded-3xl p-5 w-32 h-fit shadow-md grid place-items-center">
            {pricePerMonth} kr/mån
          </div>
          <div className="bg-bill rounded-2xl text-white p-3.5 w-28 h-fit text-sm shadow-md grid place-items-center">
            {pricePerMonth * 12} kr/år
          </div>
        </div>

        <div>
          <p>Prishistorik</p>
          {subscriptionPrices !== undefined && (
            <PriceHistory subscriptionPrices={subscriptionPrices} />
          )}
        </div>
      </div>
    </>
  );
};

export default Subscription;

export { dynamic };

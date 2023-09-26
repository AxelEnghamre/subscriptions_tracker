const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import SubscriptionLink from "@/components/UI/links/SubscriptionLink";
import AddSubscriptionButton from "@/components/UI/buttons/AddSubscriptionButton";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Home = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  const wait = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  await wait(5000);

  if (!session) {
    return <p>No session</p>;
  }

  // User subscription query
  const { data: userSubscriptions } = await supabase
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
    .eq("user_id", session.user.id);

  const totalPrice = userSubscriptions
    ? userSubscriptions.reduce(
        (prevPrice, subscription) =>
          prevPrice +
          (subscription.subscriptions?.subscriptions_prices.at(-1)
            ?.price_per_month ?? 0),
        0,
      )
    : 0;

  return (
    <div className="flex flex-col gap-5 font-inter">
      <p>
        Kostnad i {months[new Date().getMonth()]}: {totalPrice}kr
      </p>

      {userSubscriptions ? (
        <ul>
          {userSubscriptions.map((subscription) => (
            <li key={subscription.id}>
              <SubscriptionLink
                id={subscription.id}
                name={subscription.subscriptions?.services?.name as string}
                // iconUrl={subscription.subscriptions?.services?.icon_url as string}
                pricePerMonth={
                  subscription.subscriptions?.subscriptions_prices.at(-1)
                    ?.price_per_month as number
                }
              />
            </li>
          ))}
          <li>
            <AddSubscriptionButton />
          </li>
        </ul>
      ) : (
        <p>Du har inga abonemang</p>
      )}
    </div>
  );
};

export default Home;

export { dynamic };

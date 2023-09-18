const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import SubscriptionLink from "@/components/UI/links/SubscriptionLink";

const Home = async () => {

  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return (<p>No session</p>);
  }

  const { data: subscriptions } = await supabase
  .schema("public")
  .from("users_subscriptions")
  .select("*, subscriptions(*,services(*))")
  .eq("user_id", session.user.id);


  return (
    <div className="flex flex-col gap-5">
      <p>Home screen</p>
 
 {subscriptions? (
  <ul>
  {subscriptions.map((subscription)=>(
    <li key={subscription.id}>
      <SubscriptionLink 
        name={subscription.subscriptions?.services?.name as string}
        // iconUrl={subscription.subscriptions?.services?.icon_url as string}
        pricePerMonth={subscription.subscriptions?.price_per_month as number}
      />
    </li>
  ))}
 </ul>
 ) : (
  <p>Du har inga abonemang</p>
 )}
      
    </div>
  );
};

export default Home;

export {dynamic};
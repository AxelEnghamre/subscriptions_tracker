const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import SubscriptionLink from "@/components/UI/links/SubscriptionLink";

const Home = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  const { data: services } = await supabase
    .schema("public")
    .from("services")
    .select("*")
    .eq("is_public", true);

  return (
    <div className="flex flex-col gap-5">
      <p>Home screen</p>
 
      
    </div>
  );
};

export default Home;

export { dynamic };

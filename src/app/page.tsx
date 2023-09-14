const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import Menu from "@/components/menu";
import { redirect } from "next/navigation";

const Home = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    redirect("/sign-in");
  }

  const { data: services, error } = await supabase.schema("public").from("services").select("*").eq("is_public",true);

  const {data: profile} = await supabase.schema("public").from("profiles").select("*").eq("id",session.user.id);

        console.log(services);
        console.log(profile);
        console.log(error);

        if(profile) {
          return (
            <main className="w-full h-full relative">
              Home screen
              {profile[0].name}
              <Menu />
            </main>
          );
        }
        return;
};

export default Home;

export { dynamic };

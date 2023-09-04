import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import { SignedInHome, SignOutHome } from "@/components/layouts/home";

const Home = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  return (
    <main className="">{session ? <SignedInHome /> : <SignOutHome />}</main>
  );
};

export default Home;

const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import { SignedInHome, SignOutHome } from "@/components/layouts/home";
import { redirect } from "next/navigation";

const Home = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="">{session ? <SignedInHome /> : <SignOutHome />}</main>
  );
};

export default Home;

export { dynamic };

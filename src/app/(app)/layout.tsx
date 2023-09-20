const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import { redirect } from "next/navigation";
import Menu from "@/components/menu";
import { UserContextProvider, Profile } from "@/contexts/UserContext";
import Search from "@/components/UI/input/Search";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    redirect("/sign-in");
  }

  // const { data: services } = await supabase
  //   .schema("public")
  //   .from("services")
  //   .select("*")
  //   .eq("is_public", true);

  const { data: profile } = await supabase
    .schema("public")
    .from("profiles")
    .select("name,icon_url")
    .eq("id", session.user.id)
    .single();

  return (
    <UserContextProvider profile={profile as Profile}>
      <Search />
      <main className="w-full h-full bg-off-white">{children}</main>
      <Menu />
    </UserContextProvider>
  );
};

export default AppLayout;

export { dynamic };

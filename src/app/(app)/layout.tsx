const dynamic = "force-dynamic";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";
import { redirect } from "next/navigation";
import Menu from "@/components/menu";
import { UserContextProvider, Profile } from "@/contexts/UserContext";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    redirect("/sign-in");
  }

  const { data: services } = await supabase
    .schema("public")
    .from("services")
    .select("*")
    .eq("is_public", true);

  const { data: profile} = await supabase
    .schema("public")
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  console.log(services);
  console.log(profile);

  return (
    <UserContextProvider profile={profile as Profile}>
      <main className="w-full h-full">{children}</main>
      <Menu />
    </UserContextProvider>
  );
};

export default AppLayout;

export { dynamic };

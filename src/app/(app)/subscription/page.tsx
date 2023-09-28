import GoHomeButton from "@/components/UI/buttons/GoHomeButton";
import AddServiceForm from "@/components/subscription/AddServiceForm";
import AddSubscriptionForm from "@/components/subscription/AddSubscriptionForm";
import AddDisscountForm from "@/components/subscription/AddDiscountForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";

const AddSubscription = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return <p>No session</p>;
  }

  const { data: subscriptions } = await supabase
    .schema("public")
    .from("subscriptions")
    .select(
      `
      *
      `,
    )
    .eq("owner_id", session.user.id);

  const { data: services } = await supabase
    .schema("public")
    .from("services")
    .select(
      `
      *
      `,
    )
    .eq("owner_id", session.user.id);

  console.log(subscriptions);
  console.log(services);

  return (
    <>
      <div className="pb-2 text-logo flex flex-col gap-8">
        <GoHomeButton />
        <AddServiceForm />
        <AddSubscriptionForm services={services} />
        <AddDisscountForm subscriptions={subscriptions} services={services} />
      </div>
    </>
  );
};

export default AddSubscription;

import GoHomeButton from "@/components/UI/buttons/GoHomeButton";
import AddServiceForm from "@/components/subscription/AddServiceForm";
import AddSubscriptionForm from "@/components/subscription/AddSubscriptionForm";
import AddSubscriptionPrice from "@/components/subscription/AddSubscriptionPrice";
import AddDisscountForm from "@/components/subscription/AddDiscountForm";
import AddUserSubscriptionForm from "@/components/subscription/AddUserSubscriptionForm";
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

  return (
    <>
      <div className="text-logo flex flex-col gap-10 pb-[120px]">
        <GoHomeButton />
        <AddServiceForm />
        <AddSubscriptionForm services={services} />
        <AddSubscriptionPrice
          subscriptions={subscriptions}
          services={services}
        />
        <AddUserSubscriptionForm 
          subscriptions={subscriptions}
        />
        {/* <AddDisscountForm subscriptions={subscriptions} services={services} /> */}
      </div>
    </>
  );
};

export default AddSubscription;

import GoHomeButton from "@/components/UI/buttons/GoHomeButton";

const Subscription = async ({
  params,
}: {
  params: { subscription: string };
}) => {
  const subscription = params.subscription;
  return (
    <>
      <GoHomeButton />
      Your subscription is {subscription}
    </>
  );
};

export default Subscription;

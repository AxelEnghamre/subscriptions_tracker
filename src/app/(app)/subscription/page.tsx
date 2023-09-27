import GoHomeButton from "@/components/UI/buttons/GoHomeButton";
import AddSubscriptionForm from "@/components/subscription/AddSubscriptionForm";

const AddSubscription = () => {
  return (
    <>
      <div className="pb-2">
        <GoHomeButton />
        <AddSubscriptionForm />
      </div>
    </>
  );
};

export default AddSubscription;

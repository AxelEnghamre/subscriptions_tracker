"use client";

import Input from "../UI/Input";
import { useState } from "react";
import { categoryIcons, icons } from "@/lib/icons/Icons";
import ConfirmButton from "../UI/buttons/ConfirmButton";
import Image from "next/image";
import { userSubscriptionInputSchema } from "@/lib/schemas/UserSubscriptionSchemas";
import { useRouter } from "next/navigation";

const AddUserSubscriptionForm = (subscriptions: any) => {
  const [userSubscriptionFormValue, setUserSubscriptionFormValue] = useState({
    subscriptionID: 0,
    startDate: new Date().toDateString(),
    renewalDate: new Date().toDateString(),
    noticePeriodMonths: 12,
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    const validatedValues = userSubscriptionInputSchema.safeParse(
      userSubscriptionFormValue,
    );

    if (validatedValues.success) {
      console.log(validatedValues);

      try {
        const res = await fetch("/api/user-subscription/create", {
          method: "POST",
          body: JSON.stringify(validatedValues.data),
        });

        console.log(res);
        if (res.ok) {
          console.log(res);
          router.push("/");
        } else {
        }
      } catch (error) {
        // TODO show errors
        console.log(error);
      }
    } else {
      console.log(validatedValues.error);
    }

    setIsSigningIn(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name;
    let value: string | number = event.target.value;

    if (name == "subscriptionID") {
      value = parseInt(value);
    }

    setUserSubscriptionFormValue((userSubscriptionFormValueState) => ({
      ...userSubscriptionFormValueState,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-login-surface px-4 flex flex-col gap-4"
    >
      <h3 className="text-lg font-semibold">Lägg till Pprenumeration</h3>
      <label htmlFor="subscriptionID">
        <select
          name="subscriptionID"
          id="subscriptionID"
          className="focus:outline-none bg-loginbar-foreground text-login-surface font-inter rounded-2xl py-2 px-4"
          onChange={handleChange}
        >
          <option value="">Välj Prenumeration</option>
          {subscriptions.subscriptions.map((subscription: any) => (
            <option key={subscription.id} value={subscription.id}>
              {subscription.plan}
            </option>
          ))}
        </select>
      </label>

      <div className="flex justify-center ">
        <div className="bg-button-foreground text-button-surface py-2 px-4 flex flex-row items-center justify-center rounded-2xl gap-2">
          <ConfirmButton value="Lägg till" onClick={() => {}} type="submit" />
          <div className="relative h-[14px] w-[14px] m-1">
            <Image src={"/add.svg"} alt="" fill />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUserSubscriptionForm;

"use client";

import Input from "../UI/Input";
import { useState } from "react";
import { categoryIcons, icons } from "@/lib/icons/Icons";
import ConfirmButton from "../UI/buttons/ConfirmButton";
import Image from "next/image";
import { subscriptionPriceInputSchema } from "@/lib/schemas/SubscriptionPriceSchemas";

const AddDisscountForm = (subscriptions: any, services: any) => {
  const [subscriptionPriceFormValue, setSubscriptionPriceFormValue] = useState({
    subscriptionID: "",
    pricePerMonth: "",
    createdAt: "",
  });
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    const validatedValues = subscriptionPriceInputSchema.safeParse(
      subscriptionPriceFormValue,
    );

    if (validatedValues.success) {
      console.log(validatedValues);

      try {
        const res = await fetch("/api/subscription-price/create", {
          method: "POST",
          body: JSON.stringify(validatedValues.data),
        });

        console.log(res);
        if (res.ok) {
          console.log(res);
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

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const name = event.target.name;
    let value: string | number = event.target.value;

    if (name === "subscriptionID" || name === "pricePerMonth") {
      value = parseInt(value);
    }

    setSubscriptionPriceFormValue((subscriptionPriceFormValueSate) => ({
      ...subscriptionPriceFormValueSate,
      [name]: value,
    }));

    const timestamp = String(Date.now());

    setSubscriptionPriceFormValue((prevState) => ({
      ...prevState,
      createdAt: timestamp,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-login-surface px-4 flex flex-col gap-4"
    >
      <h3 className="text-lg font-semibold">Lägg till Prenumerations pris</h3>
      <label htmlFor="subscriptionID">
        <select
          name="subscriptionID"
          id="subscriptionID"
          className="focus:outline-none bg-loginbar-foreground text-login-surface font-inter rounded-2xl py-2 px-4"
          onChange={handleChange}
        >
          <option value="">Välj Prenumeration</option>
          {subscriptions.subscriptions.map((subscription:any) => (
            <option key={subscription.id} value={subscription.id}>
              {subscription.plan}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="pricePerMonth">
        <p>Prenumerations pris</p>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="pricePerMonth"
          placeholder="59"
          name="pricePerMonth"
          type="number"
          value={subscriptionPriceFormValue.pricePerMonth}
          onChange={handleChange}
        />
      </label>

      <div className="flex justify-center ">
        <div className="bg-button-foreground text-button-surface py-2 px-4 flex flex-row items-center justify-center rounded-2xl gap-2">
          <ConfirmButton value="Lägg till" onClick={() => {}} type="submit" />
          <div className="relative h-[14px] w-[14px] m-1">
            <Image src={"/add.svg"} alt="" fill={true} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDisscountForm;

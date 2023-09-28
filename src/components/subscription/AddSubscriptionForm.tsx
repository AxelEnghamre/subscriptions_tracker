"use client";

import Input from "@/components/UI/Input";
import { useState } from "react";
import ConfirmButton from "../UI/buttons/ConfirmButton";
import Image from "next/image";
import { type } from "os";
import { subscriptionInputSchema } from "@/lib/schemas/SubscriptionSchemas";

const AddSubscriptionForm = (services) => {
  const [subscriptionFormValue, setSubscriptionFormValue] = useState({
    serviceID: "",
    plan: "",
  });
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    const validatedValues = subscriptionInputSchema.safeParse(
      subscriptionFormValue,
    );

    if (validatedValues.success) {
      console.log(validatedValues);
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

    if (name === "serviceID") {
      value = parseInt(value);
    }

    setSubscriptionFormValue((subscriptionFormValueSate) => ({
      ...subscriptionFormValueSate,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-login-surface h-screen px-4 flex flex-col gap-4"
    >
      <label htmlFor="serviceID">
        <select
          name="serviceID"
          id="serviceID"
          className="focus:outline-none bg-loginbar-foreground text-login-surface font-inter rounded-2xl py-2 px-4"
          onChange={handleChange}
        >
          <option value="">Välj Service</option>
          {services.services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="plan">
        <p>Plan</p>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="plan"
          placeholder="familj"
          name="plan"
          type="text"
          value={subscriptionFormValue.plan}
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

export default AddSubscriptionForm;

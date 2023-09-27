"use client";

import Input from "@/components/UI/Input";
import { useState } from "react";
import { categoryIcons, icons } from "@/lib/icons/Icons";
import ConfirmButton from "../UI/buttons/ConfirmButton";
import Image from "next/image";
import { type } from "os";

const AddSubscriptionForm = () => {
  const [subscriptionFormValue, setSubscriptionFormValue] = useState({
    name: "",
    icon: "",
    category: "",
    costPerMonth: "",
    subscriptionPlan: "",
    discountPrice: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setSubscriptionFormValue((subscriptionFormValueSate) => ({
      ...subscriptionFormValueSate,
      [name]: value,
    }));

    console.log(subscriptionFormValue);
  };
  return (
    <form className="text-login-surface h-screen px-4">
      <div>
        <label htmlFor="name">Namn på Service</label>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="name"
          placeholder="Netflix"
          name="name"
          type="name"
          value={subscriptionFormValue.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="icon">Välj iconbild</label>
        <input type="file" id="icon" name="icon" />
      </div>
      <div>
        <label htmlFor="category">Kategori</label>
        <select name="category" id="category" className="text-button-surface">
          <option value="">Välj kategori</option>
          {categoryIcons.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="costPerMonth">Kostnad per månad</label>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="costPerMonth"
          placeholder="99"
          name="costPerMonth"
          type="number"
          value={subscriptionFormValue.costPerMonth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="subscriptionPlan">prenumerationsplan</label>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="subscriptionPlan"
          placeholder="Familj"
          name="subscriptionPlan"
          type="text"
          value={subscriptionFormValue.subscriptionPlan}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="discountPrice">Rabbat pris</label>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="discountPrice"
          placeholder="59"
          name="discountPrice"
          type="number"
          value={subscriptionFormValue.discountPrice}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center ">
        <div className="bg-button-foreground text-button-surface px-4 flex flex-row items-center justify-center rounded-2xl py-2 gap-2">
          <ConfirmButton
            className=""
            value="Lägg till"
            onClick={() => {}}
            type="submit"
          />
          <div className="relative h-[14px] w-[14px] m-1">
            <Image src={"/add.svg"} alt="" fill={true} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddSubscriptionForm;

"use client";

import Input from "@/components/UI/Input";
import { useState } from "react";
import { categoryIcons, icons } from "@/lib/icons/Icons";
import ConfirmButton from "../UI/buttons/ConfirmButton";
import Image from "next/image";
import { serviceInputSchema } from "@/lib/schemas/ServiceSchemas";
import { useRouter } from "next/navigation";

const AddServiceForm = () => {
  const [serviceFormValue, setServiceFormValue] = useState({
    name: "",
    category: "",
    websiteUrl: "",
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    const validatedValues = serviceInputSchema.safeParse(serviceFormValue);

    if (validatedValues.success) {
      console.log(validatedValues);

      try {
        const res = await fetch("/api/service/create", {
          method: "POST",
          body: JSON.stringify(validatedValues.data),
        });

        console.log(res);
        if (res.ok) {
          console.log(res);
          router.refresh();
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
    const value = event.target.value;
    setServiceFormValue((serviceFormValueSate) => ({
      ...serviceFormValueSate,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-login-surface px-4 flex flex-col gap-4"
    >
      <h3 className="text-lg font-semibold">Lägg till Service</h3>
      <label htmlFor="name">
        <p>Namn på Service</p>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="name"
          placeholder="Netflix"
          name="name"
          type="name"
          value={serviceFormValue.name}
          onChange={handleChange}
        />
      </label>

      {/* <label htmlFor="icon">
        <p>Service icon</p>
        <div className="bg-loginbar-foreground text-login-surface w-[90px] rounded-2xl py-2 px-4 text-center">
          <p>Välj bild</p>
          <input
            type="file"
            id="icon"
            name="icon"
            className="hidden"
            onChange={handleChange}
          />
        </div>
      </label> */}

      <label htmlFor="websiteUrl">
        <p>Länk till hemsidan</p>
        <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="websiteUrl"
          placeholder="netflix.com"
          name="websiteUrl"
          type="url"
          value={serviceFormValue.websiteUrl}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="category">
        <p>Kategori</p>
        <select
          name="category"
          id="category"
          className="focus:outline-none bg-loginbar-foreground text-login-surface font-inter rounded-2xl py-2 px-4"
          onChange={handleChange}
        >
          <option value="">Välj kategori</option>
          {categoryIcons.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
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

export default AddServiceForm;

"use client";

import Input from "@/components/UI/Input";
import { useState } from "react";
import { categoryIcons } from "@/lib/icons/Icons";
import ConfirmButton from "../UI/buttons/ConfirmButton";
import { type } from "os";

const AddSubscriptionForm = () => {
  const [serviceName, setServiceName] = useState("");
  const [serviceIcon, setServiceIcon] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceCostPerMonth, setServiceCostPerMonth] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  return (
    <form className="text-login-surface h-screen px-4">
      {/* <Input 
                name="name"
                id="name"
                type="text"
                placeholder="Namn"
                value=""
                onChange={()=>{}}
            /> */}
      {/* name */}
      <div>
        <label htmlFor="">Namn på Service</label>
        <Input
          id=""
          placeholder=""
          name=""
          type=""
          value=""
          onChange={() => {}}
        />
      </div>
      <div>
        <label htmlFor="file">Välj iconbild</label>
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
        <label htmlFor="">Kostnad per månad</label>
        <Input
          id=""
          placeholder=""
          name=""
          type=""
          value=""
          onChange={() => {}}
        />
      </div>
      <div>
        <label htmlFor="">Kostnad per månad</label>
        <Input
          id=""
          placeholder=""
          name=""
          type=""
          value=""
          onChange={() => {}}
        />
      </div>
      <div>
        <label htmlFor="">prenumerationsplan</label>
        <Input
          id=""
          placeholder=""
          name=""
          type=""
          value=""
          onChange={() => {}}
        />
      </div>

      <ConfirmButton value="" onClick={() => {}} type="submit" />
    </form>
  );
};

export default AddSubscriptionForm;

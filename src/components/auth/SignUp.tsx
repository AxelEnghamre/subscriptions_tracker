"use client";

import { useState } from "react";
import ThemeButton from "../UI/buttons/ThemeButton";
import Input from "../UI/Input";
import ShowPasswordButton from "../UI/ShowPasswordButton";
import { signUpSchema } from "@/lib/schemas/AuthSchemas";

// const nameSchema = signUpSchema.pick({ name: true });
// const emailSchema = signUpSchema.pick({ email: true });
// const passwordSchema = signUpSchema.pick({ password: true });
// const passwordSchema = signUpSchema.pick({ password: true });

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [signUpFormValue, setSignUpFormValue] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setSignUpFormValue((signUpFormValueSate) => ({
      ...signUpFormValueSate,
      [name]: value,
    }));
  };
  return (
    <div className="bg-dawn">
      <h2>Skapa konto</h2>
      <ThemeButton />
      <form action="submit">
        <div>
          <label htmlFor="email">Välj e-postadress</label>
          <Input
            type="email"
            name="email"
            placeholder="bill@example.com"
            value={signUpFormValue.email}
            onChange={handleChange}
            id="email"
          />
        </div>
        <label htmlFor="name">Skriv ditt namn</label>
        <Input
          type="name"
          name="name"
          placeholder="Bill"
          value={signUpFormValue.name}
          onChange={handleChange}
          id="name"
        />
        <div></div>

        <div>
          <label htmlFor="password">Välj lösenord</label>
          <div>
            <Input
              type={!showPassword ? "password" : "text"}
              name="password"
              placeholder="Ange lösenord"
              value={signUpFormValue.password}
              onChange={handleChange}
              id="password"
            />
            <ShowPasswordButton
              onClick={() =>
                showPassword ? setShowPassword(false) : setShowPassword(true)
              }
            />
          </div>
          <div>
            <Input
              type={!showConfirmPassword ? "password" : "text"}
              name="confirmPassword"
              placeholder="Ange lösenord"
              value={signUpFormValue.confirmPassword}
              onChange={handleChange}
              id="password"
            />
            <ShowPasswordButton
              onClick={() =>
                showConfirmPassword
                  ? setshowConfirmPassword(false)
                  : setshowConfirmPassword(true)
              }
            />
          </div>
        </div>
        <p>
          Genom att skapa ett konto accepterar du våra{" "}
          <a href="">Regler och Vilkor</a>
        </p>
        <button>Skapa konto</button>
      </form>
    </div>
  );
};

export default SignUp;

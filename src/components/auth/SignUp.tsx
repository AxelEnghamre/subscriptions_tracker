"use client";

import { z } from "zod";
import { useState } from "react";
import ThemeButton from "../UI/buttons/ThemeButton";
import Input from "../UI/Input";
import Image from "next/image";
import ShowPasswordButton from "../UI/ShowPasswordButton";
import ConfirmButton from "../UI/buttons/ConfirmButton";

const signUpSchema = z.object({
  name: z.string().min(2, "För kort").max(50, "För långt"),
  email: z.string().email("Fel format"),
  password: z.string().min(5, "För kort"),
  confirmPassword: z.string().min(5, "För kort"),
});

const emailSchema = signUpSchema.pick({ email: true });
const nameSchema = signUpSchema.pick({ name: true });
const passwordSchema = signUpSchema.pick({ password: true });
const confirmPasswordSchema = signUpSchema.pick({ confirmPassword: true });

const SignUp = () => {
  // TODO use a component state for the components instead
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [signUpFormValue, setSignUpFormValue] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confrimPasswordError, setConfrimPasswordError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setSignUpFormValue((signUpFormValueSate) => ({
      ...signUpFormValueSate,
      [name]: value,
    }));

    if (name === "email") {
      const resp = emailSchema.safeParse({ email: value });
      if (!resp.success) {
        const error = resp.error.issues[0].message;
        setEmailError(error);
      } else {
        setEmailError("");
      }
    } else if (name === "name") {
      const resp = nameSchema.safeParse({ name: value });
      if (!resp.success) {
        const error = resp.error.issues[0].message;
        setNameError(error);
      } else {
        setNameError("");
      }
    } else if (name === "password") {
      const resp = passwordSchema.safeParse({ password: value });
      if (!resp.success) {
        const error = resp.error.issues[0].message;
        setPasswordError(error);
      } else {
        setPasswordError("");
      }
    } else if (name === "confirmPassword") {
      const password = passwordSchema.safeParse({ password: value });
      const confimrPassword = passwordSchema.safeParse({
        confirmPassword: value,
      });
      if (password != confimrPassword) {
        setConfrimPasswordError("Lösenorden matchar inte");
      } else {
        setConfrimPasswordError("");
      }
    }
  };
  return (
    <div className="bg-menu">
      <Image
        src="/lightLogo.svg"
        alt="bill logo"
        width={300}
        height={200}
        priority
      />
      <h2>Skapa konto</h2>
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
          <p>{emailError}</p>
        </div>
        <div>
          <label htmlFor="name">Skriv ditt namn</label>
          <Input
            type="name"
            name="name"
            placeholder="Bill"
            value={signUpFormValue.name}
            onChange={handleChange}
            id="name"
          />
          <p>{nameError}</p>
        </div>

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
            <p>{passwordError}</p>
          </div>
          <div>
            <Input
              type={!showConfirmPassword ? "password" : "text"}
              name="confirmPassword"
              placeholder="Ange lösenord"
              value={signUpFormValue.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
            />
            <ShowPasswordButton
              onClick={() =>
                showConfirmPassword
                  ? setshowConfirmPassword(false)
                  : setshowConfirmPassword(true)
              }
            />
          </div>
          <p>{confrimPasswordError}</p>
        </div>
        <p>
          Genom att skapa ett konto accepterar du våra{" "}
          <a href="">Regler och Vilkor</a>
        </p>
        <button>Skapa konto</button>
      </form>
      <ThemeButton />
      <ConfirmButton
        className="bg-bill rounded-[1.875rem] pb-4 pt-4 pl-6 pr-6 text-off-white"
        value="Skapa konto"
        onClick={() => {
          console.log("hello");
        }}
      />
    </div>
  );
};

export default SignUp;

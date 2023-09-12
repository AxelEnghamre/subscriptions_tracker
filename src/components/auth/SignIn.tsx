"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/lib/schemas/AuthSchemas";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Input from "../UI/Input";
import Link from "next/link";

const SignIn = () => {
  const router = useRouter();
  const [signInFormValue, setSignInFormValue] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    const validatedValues = signInSchema.safeParse(signInFormValue);

    // CLIENT VALIDATION
    if (validatedValues.success) {
      try {
        const res = await fetch("/api/auth/sign-in", {
          method: "POST",
          body: JSON.stringify(validatedValues.data),
        });

        if (res.ok) {
          router.replace("/");
          router.refresh();
        }
      } catch (error) {
        // TODO show errors
        console.log(error);
      }
    }

    setIsSigningIn(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setSignInFormValue((signInFormValueSate) => ({
      ...signInFormValueSate,
      [name]: value,
    }));

    // TODO show errors
  };

  return (
    <div>
      {/* <img src={dark} alt="hello" /> */}
      <h2 className="text-xl font-normal">Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block pr-6 pl-6">
          E-post
        </label>
        <div className="pr-6 pl-6 flex">
          <img src="mail.svg" alt="" />
          <Input
            type="email"
            name="email"
            placeholder="Ange e-postadress"
            value={signInFormValue.email}
            onChange={handleChange}
            id="email"
          />
        </div>

        <label htmlFor="password" className="block pr-6 pl-6">
          Lösenord
        </label>
        <div className="flex pr-6 pl-6">
          <img src="/lock.svg" alt="" />
          <Input
            type={!showPassword ? "password" : "text"}
            name="password"
            placeholder="Ange lösenord"
            value={signInFormValue.password}
            onChange={handleChange}
            id="password"
          />
          <img
            src="/eye.svg"
            alt=""
            className="w-30-h40"
            onClick={() =>
              showPassword ? setShowPassword(false) : setShowPassword(true)
            }
          />
        </div>

        <a href="">Glömmt ditt lösenord?</a>

        <button type="submit" disabled={isSigningIn}>
          Logga in
        </button>
      </form>
      <p>Har du inget konto?</p>
      <Link href="/sign-up">Skapa konto</Link>
    </div>
  );
};

export default SignIn;

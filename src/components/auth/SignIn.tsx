"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/lib/schemas/AuthSchemas";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Input } from "../UI/Input";

const SignIn = () => {
  const router = useRouter();
  const [signInFormValue, setSignInFormValue] = useState({
    email: "",
    password: "",
  });
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
    <form onSubmit={handleSubmit}>
      <button onClick={() => changeThemeTo("dark")}>dark</button>
      <button onClick={() => changeThemeTo("light")}>light</button>
      <Input
        type="email"
        name="email"
        placeholder="Skriv din Email"
        value={signInFormValue.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Skriv ditt lösenord"
        value={signInFormValue.password}
        onChange={handleChange}
      />
      <button type="submit" disabled={isSigningIn}>
        Logga in
      </button>
    </form>
  );
};

export default SignIn;

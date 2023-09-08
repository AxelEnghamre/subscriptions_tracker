"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/lib/schemas/AuthSchemas";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const SignIn = () => {
  const router = useRouter();
  const [signInFormValue, setSignInFormValue] = useState({
    email: "",
    password: "",
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
const {theme,changeThemeTo} = useContext(ThemeContext) as ThemeContext;
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
      <button onClick={()=>changeThemeTo("dark")}>dark</button>
      <button onClick={()=>changeThemeTo("light")}>light</button>
      <input
        className="border-solid border-black border-2 bg-midnight"
        type="email"
        name="email"
        value={signInFormValue.email}
        onChange={handleChange}
      />
      <input
        className="border-solid border-black border-2"
        type="password"
        name="password"
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

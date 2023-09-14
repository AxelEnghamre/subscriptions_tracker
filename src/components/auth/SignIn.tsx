"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/lib/schemas/AuthSchemas";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";
import ThemeButton from "../UI/buttons/ThemeButton";
import Input from "../UI/Input";
import ShowPasswordButton from "../UI/ShowPasswordButton";
import Link from "next/link";
import ConfirmButton from "../UI/buttons/ConfirmButton";

const emailSchema = signInSchema.pick({ email: true });
const passwordSchema = signInSchema.pick({ password: true });

const SignIn = () => {
  const router = useRouter();
  const [signInFormValue, setSignInFormValue] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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

    if (name === "email") {
      const resp = emailSchema.safeParse({ email: value });
      if (!resp.success) {
        const error = resp.error.issues[0].message;
        setEmailError(error);
      } else {
        setEmailError("");
      }
    } else if (name === "password") {
      const resp = passwordSchema.safeParse({ password: value });
      if (!resp.success) {
        const error = resp.error.issues[0].message;
        setPasswordError(error);
      } else {
        setPasswordError("");
      }
    }
  };

  return (
    <div className="bg-menu">
      {/* TODO change logo based on theme*/}
      <Image
        src="/lightLogo.svg"
        alt="bill logo"
        width={300}
        height={200}
        priority
      />

      <h2 className="text-xl font-normal">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mx-6">
          <label htmlFor="email" className="">
            <p>E-post</p>
            <div className="flex flex-row items-center rounded-3xl bg-off-white h-12 w-full">
              <div className="pl-4">
                <Image
                  src={"mail.svg"}
                  alt="email icon"
                  width={16}
                  height={13}
                />
              </div>

              <Input
                className="focus:outline-none"
                type="email"
                name="email"
                placeholder="Ange e-postadress"
                value={signInFormValue.email}
                onChange={handleChange}
                id="email"
              />
            </div>
          </label>
          <p>{emailError}</p>
        </div>

        <div className="mx-6">
          <label htmlFor="password" className="">
            <p>Lösenord</p>
            <div className="flex flex-row items-center rounded-3xl bg-off-white h-12 w-full">
              <div className="pl-4">
                <Image
                  src={"/lock.svg"}
                  alt="lock icon"
                  width={16}
                  height={20}
                />
              </div>
              <Input
                className="focus:outline-none"
                type={!showPassword ? "password" : "text"}
                name="password"
                placeholder="Ange lösenord"
                value={signInFormValue.password}
                onChange={handleChange}
                id="password"
              />

              <div className="pr-4">
                <ShowPasswordButton
                  onClick={() =>
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true)
                  }
                />
              </div>
            </div>
          </label>
          <p>{passwordError}</p>
        </div>

        <a href="">Glömmt ditt lösenord?</a>

        <button type="submit" disabled={isSigningIn}>
          Logga in
        </button>
      </form>
      <ConfirmButton
        className="bg-bill rounded-[1.875rem] pb-4 pt-4 pl-6 pr-6 text-off-white"
        value="Logga in"
        onClick={() => {
          console.log("hello");
        }}
      />
      <p>
        Har du inget konto? <Link href="/sign-up">Skapa konto</Link>
      </p>
      <ThemeButton />
    </div>
  );
};

export default SignIn;

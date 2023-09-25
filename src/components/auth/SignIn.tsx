"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/lib/schemas/AuthSchemas";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";
import ThemeButton from "../UI/buttons/ThemeButton";
import Input from "@/components/UI/Input";
import ShowPasswordButton from "../UI/buttons/ShowPasswordButton";
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
  const [signInFail, setSignInFail] = useState(false);

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
        } else {
          setSignInFail(true);
        }
      } catch (error) {
        // TODO show errors
        console.log(error);
      }
    } else {
      const errors = validatedValues.error.errors;

      console.log(validatedValues.error);

      errors.forEach((error) => {
        if (error.path[0] === "password") {
          setPasswordError(error.message);
        } else if (error.path[0] === "email") {
          setEmailError(error.message);
        }
      });
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
    <div className="bg-gradient-to-b from-loading-gradient-top to-loading-gradient-bottom h-full overflow-y-scroll pb-20">
      {/* TODO change logo based on theme*/}
      <div className="w-full flex flex-col items-center justify-center pt-[18px] gap-8 mb-7">
        {theme === "dark" && (
          <div className="relative w-[195px] h-[118px]">
            <Image src="/lightLogo.svg" alt="bill logo" fill={true} priority />
          </div>
        )}
        {theme === "light" && (
          <div className="relative w-[195px] h-[118px]">
            <Image src={"/darkLogo.svg"} alt="bill logo" fill={true} priority />
          </div>
        )}

        <h2 className="text-xl font-normal text-login-surface">Login</h2>

        {signInFail && (
          <p className="text-danger font-inter">Något gick fel, försök igen</p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="mx-6">
            <label htmlFor="email">
              <p className="text-login-surface font-inter">E-post</p>
              <div className="flex flex-row items-center rounded-3xl h-12 w-full bg-loginbar-foreground">
                <div className="pl-4">
                  {theme === "dark" && (
                    <div className="relative w-[16px] h-[13px]">
                      <Image
                        src={"mailDarkMode.svg"}
                        alt="email icon"
                        fill={true}
                      />
                    </div>
                  )}
                  {theme === "light" && (
                    <div className="relative w-[16px] h-[13px]">
                      <Image src={"mail.svg"} alt="email icon" fill={true} />
                    </div>
                  )}
                </div>

                <Input
                  className="focus:outline-none bg-loginbar-foreground text-loginbar-surface placeholder-loginbar-surface font-inter"
                  type="email"
                  name="email"
                  placeholder="Ange e-postadress"
                  value={signInFormValue.email}
                  onChange={handleChange}
                  id="email"
                />
              </div>

              <div className="text-danger font-inter">
                <p>{emailError}</p>
              </div>
            </label>
          </div>

          <div className="mx-6">
            <label htmlFor="password">
              <p className="text-login-surface font-inter">Lösenord</p>
              <div className="flex flex-row items-center rounded-3xl h-12 w-full bg-loginbar-foreground">
                <div className="pl-4">
                  {theme === "dark" && (
                    <div className="relative w-[16px] h-[20px]">
                      <Image
                        src={"/lockDarkMode.svg"}
                        alt="lock icon"
                        fill={true}
                      />
                    </div>
                  )}
                  {theme === "light" && (
                    <div className="relative w-[16px] h-[20px]">
                      <Image src={"/lock.svg"} alt="lock icon" fill={true} />
                    </div>
                  )}
                </div>
                <Input
                  className="focus:outline-none bg-loginbar-foreground text-loginbar-surface placeholder-loginbar-surface font-inter"
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

              <div className="w-full flex justify-between pt-2 ">
                <div className="text-danger font-inter">
                  <p>{passwordError}</p>
                </div>
                <a
                  href="/sign-in"
                  className="text-login-surface underline font-inter"
                >
                  Glömmt ditt lösenord?
                </a>
              </div>
            </label>
          </div>
        </div>

        <div className="w-full flex justify-center p-5">
          <ConfirmButton
            className="bg-button-foreground rounded-[1.875rem] pb-4 pt-4 pl-6 pr-6 text-button-surface font-inter"
            value="Logga in"
            type="submit"
            disabled={isSigningIn}
            onClick={() => {}}
          />
        </div>
      </form>

      <div className=" w-full flex flex-col justify-center items-center gap-7 text-logo">
        <div className="flex gap-2 font-inter">
          <p>Har du inget konto?</p>
          <Link href="/sign-up" className="underline font-bold">
            Skapa konto
          </Link>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default SignIn;

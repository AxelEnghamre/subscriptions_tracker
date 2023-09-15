"use client";

import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeButton from "../UI/buttons/ThemeButton";
import Input from "../UI/input/Input";
import Image from "next/image";
import ShowPasswordButton from "../UI/buttons/ShowPasswordButton";
import ConfirmButton from "../UI/buttons/ConfirmButton";
import GoBackButton from "../UI/buttons/GoBackButton";
import { signUpSchema } from "@/lib/schemas/AuthSchemas";

const signUpSchemaCopy = z.object({
  name: z.string().min(2, "För kort").max(50, "För långt"),
  email: z.string().email("Fel format"),
  password: z.string().min(5, "För kort"),
  confirmPassword: z.string().min(5, "För kort"),
});

const emailSchema = signUpSchemaCopy.pick({ email: true });
const nameSchema = signUpSchemaCopy.pick({ name: true });
const passwordSchema = signUpSchemaCopy.pick({ password: true });
const confirmPasswordSchema = signUpSchemaCopy.pick({ confirmPassword: true });

const SignUp = () => {
  // TODO use a component state for the components instead
  const router = useRouter();
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
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    checkPasswordMatch();
  }, [signUpFormValue.confirmPassword]);

  const checkPasswordMatch = () => {
    const password = signUpFormValue.password;
    const confirmPassword = signUpFormValue.confirmPassword;

    if (password != confirmPassword) {
      setConfrimPasswordError("Lösenorden matchar inte");
    } else {
      setConfrimPasswordError("");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    const validatedValues = signUpSchema.safeParse(signUpFormValue);

    // CLIENT VALIDATION
    if (validatedValues.success) {
      // console.log("success");
      try {
        const res = await fetch("/api/auth/sign-up", {
          method: "POST",
          body: JSON.stringify(validatedValues.data),
        });

        console.log(res);
        if (res.ok) {
          // router.replace("/sign-up");
          // router.refresh();
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
    }
  };
  return (
    <div className="bg-gradient-to-b from-loading-gradient-top to-loading-gradient-bottom h-full">
      <div className="flex justify-center w-full pt-[18px]">
        <Image
          src="/lightLogo.svg"
          alt="bill logo"
          width={195}
          height={118}
          priority
        />
      </div>

      <div className="flex flex-col gap-[34px] pl-6">
        <GoBackButton
          onClick={() => {
            router.push("/sign-in");
          }}
        />
        <h2>Skapa konto</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mx-6 pt-[34px] pb-5">
          <label htmlFor="email">
            <p>Välj e-postadress</p>
            <Input
              className="focus:outline-none"
              type="email"
              name="email"
              placeholder="bill@example.com"
              value={signUpFormValue.email}
              onChange={handleChange}
              id="email"
            />
            <p>{emailError}</p>
          </label>
        </div>

        <div className="mx-6 pb-5">
          <label htmlFor="name">
            <p>Skriv ditt namn</p>
            <Input
              className="focus:outline-none"
              type="name"
              name="name"
              placeholder="Bill"
              value={signUpFormValue.name}
              onChange={handleChange}
              id="name"
            />
            <p>{nameError}</p>
          </label>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">
            <div className="mx-6 pb-4">
              <p>Välj lösenord</p>
              <div className="flex flex-row items-center rounded-3xl bg-off-white h-12 w-full">
                <Input
                  className="focus:outline-none"
                  type={!showPassword ? "password" : "text"}
                  name="password"
                  placeholder="Ange lösenord"
                  value={signUpFormValue.password}
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
            </div>
            <p>{passwordError}</p>
          </label>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword">
              <div className="mx-6">
                <div className="flex flex-row items-center rounded-3xl bg-off-white h-12 w-full">
                  <Input
                    className="focus:outline-none"
                    type={!showConfirmPassword ? "password" : "text"}
                    name="confirmPassword"
                    placeholder="Upprepa Lösenord"
                    value={signUpFormValue.confirmPassword}
                    onChange={handleChange}
                    id="confirmPassword"
                  />

                  <div className="pr-4">
                    <ShowPasswordButton
                      onClick={() =>
                        showConfirmPassword
                          ? setshowConfirmPassword(false)
                          : setshowConfirmPassword(true)
                      }
                    />
                  </div>
                </div>
              </div>
              <p>{confrimPasswordError}</p>
            </label>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col text-center">
            <p>Genom att skapa ett konto accepterar du våra</p>
            <a href="" className="underline">
              Regler och Vilkor
            </a>
          </div>

          <div>
            <ConfirmButton
              className="bg-bill rounded-[1.875rem] pb-4 pt-4 pl-6 pr-6 text-off-white"
              value="Skapa konto"
              type="submit"
              disabled={false}
              onClick={() => {}}
            />
          </div>
        </div>
      </form>

      <div className="flex w-full justify-center">
        <ThemeButton />
      </div>
    </div>
  );
};

export default SignUp;

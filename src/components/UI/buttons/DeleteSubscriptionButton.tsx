"use client";

import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import { userSubscriptionInputDeleteSchema } from "@/lib/schemas/UserSubscriptionSchemas";
import { useRouter } from "next/navigation";

const DeleteSubscriptionButton = ({
  id,
  className,
}: {
  id: string;
  className?: string;
}) => {
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;
  const router = useRouter();

  const handleClick = async () => {
    const data = { id: String(id) };
    console.log(data);

    const validatedValues = userSubscriptionInputDeleteSchema.safeParse(data);

    if (validatedValues.success) {
      console.log(validatedValues.success);

      try {
        const res = await fetch("/api/user-subscription/delete", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (res.ok) {
          console.log(res);
          router.replace("/");
          router.refresh();
        }
      } catch (error) {
        // TODO show errors
        console.log(error);
      }
    } else {
      console.log(validatedValues.error);
    }
  };
  return (
    <div
      className={`w-24 h-24 p-4 rounded-2xl bg-button-foreground text-xs text-button-surface shadow-lg flex flex-col items-center justify-center gap-3 font-inter ${className}`}
      onClick={handleClick}
    >
      {theme === "dark" && (
        <div className="relative w-[24px] h-[28px]">
          <Image src="/deleteDark.svg" alt="delete icon" fill={true} priority />
        </div>
      )}
      {theme === "light" && (
        <div className="relative w-[24px] h-[28px]">
          <Image
            src={"/deleteLight.svg"}
            alt="delete icon"
            fill={true}
            priority
          />
        </div>
      )}
      <p>Avsluta</p>
    </div>
  );
};

export default DeleteSubscriptionButton;

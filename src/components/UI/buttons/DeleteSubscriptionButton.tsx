"use client";

import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

const DeleteSubscriptionButton = ({
  id,
  className,
}: {
  id: number;
  className?: string;
}) => {
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;

  const handleClick = () => {
    console.log(id);
  };
  return (
    <div
      className={`w-24 h-24 p-4 rounded-2xl bg-button-foreground text-xs text-button-surface shadow-lg flex flex-col items-center justify-center gap-3 font-inter ${className}`}
      onClick={handleClick}
    >
      {theme === "dark" && (
        <div className="relative w-[24px] h-[28px]">
          <Image
            src="/deleteDarkMode.svg"
            alt="delete icon"
            fill={true}
            priority
          />
        </div>
      )}
      {theme === "light" && (
        <div className="relative w-[24px] h-[28px]">
          <Image
            src={"/deleteLightMode.svg"}
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

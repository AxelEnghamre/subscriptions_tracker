"use client";

import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

const DeleteSubscriptionButton = () => {
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;
  return (
    <div className="w-24 h-24 p-4 rounded-2xl bg-white text-xs shadow-lg flex flex-col items-center justify-center gap-3 font-inter">
      {theme === "dark" && (
        <div className="relative w-[24px] h-[28px]">
          <Image
            src="/deleteLightMode.svg"
            alt="delete icon"
            fill={true}
            priority
          />
        </div>
      )}
      {theme === "light" && (
        <div className="relative w-[24px] h-[28px]">
          <Image
            src={"/deleteDarkMode.svg"}
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

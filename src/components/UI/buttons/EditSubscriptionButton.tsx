"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

const EditSubscriptionButton = () => {
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;
  return (
    <div className="w-24 h-24 p-4 rounded-2xl bg-white text-xs shadow-lg flex flex-col items-center justify-center gap-3 font-inter">
      {theme === "dark" && (
        <div className="relative w-[24px] h-[24px]">
          <Image
            src="/editLightMode.svg"
            alt="edit icon"
            fill={true}
            priority
          />
        </div>
      )}
      {theme === "light" && (
        <div className="relative w-[24px] h-[24px]">
          <Image
            src={"/editDarkMode.svg"}
            alt="edit icon"
            fill={true}
            priority
          />
        </div>
      )}
      <p>Ändra</p>
    </div>
  );
};

export default EditSubscriptionButton;

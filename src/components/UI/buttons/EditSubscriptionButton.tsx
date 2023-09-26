"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

const EditSubscriptionButton = ({
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
        <div className="relative w-[24px] h-[24px]">
          <Image src="/editDark.svg" alt="edit icon" fill={true} priority />
        </div>
      )}
      {theme === "light" && (
        <div className="relative w-[24px] h-[24px]">
          <Image src={"/editLight.svg"} alt="edit icon" fill={true} priority />
        </div>
      )}
      <p>Ändra</p>
    </div>
  );
};

export default EditSubscriptionButton;

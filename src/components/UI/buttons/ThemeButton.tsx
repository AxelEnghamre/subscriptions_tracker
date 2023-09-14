"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

const ThemeButton = () => {
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;

  const handleClick = () => {
    if (theme === "dark") {
      changeThemeTo("light");
    } else {
      changeThemeTo("dark");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-off-white w-20 h-10 flex flex-row items-center rounded-3xl p-2`}
    >
      <div
        className={`w-8 h-8 bg-bill rounded-full grid place-items-center duration-300 ${
          theme === "light" ? " translate-x-0" : " translate-x-full"
        }`}
      >
        <div className="w-6 h-6 relative">
          {theme === "light" ? (
            <Image src="/Sun.svg" fill alt="light mode icon" />
          ) : (
            <Image src="/Moon.svg" fill alt="dark mode icon" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeButton;

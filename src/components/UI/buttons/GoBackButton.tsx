"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const GoBackButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: Function;
}) => {
  const { theme } = useContext(ThemeContext) as ThemeContext;

  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className={`relative w-10 h-10 ` + className}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1111 10.2222L9 16.3333M9 16.3333L15.1111 22.4444M9 16.3333H18.7778C25.5281 16.3333 31 21.8052 31 28.5555V29.7777"
          stroke={theme === "light" ? "#111344" : "#F6F6F6"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default GoBackButton;

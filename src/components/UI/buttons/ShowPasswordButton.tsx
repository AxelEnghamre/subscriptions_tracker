import Image from "next/image";
import { useState, useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const ShowPasswordButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLImageElement>;
}) => {
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;
  return (
    <div>
      {theme === "dark" && (
        <div className="relative w-[22px] h-[15px]">
          <Image
            src={"/eyeDark.svg"}
            fill={true}
            alt="show password button"
            onClick={onClick}
          />
        </div>
      )}
      {theme === "light" && (
        <div className="relative w-[22px] h-[15px]">
          <Image
            src={"/eyeLight.svg"}
            fill={true}
            alt="show password button"
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};
export default ShowPasswordButton;

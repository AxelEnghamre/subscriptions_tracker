"use client";

import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { MenuContext } from "@/contexts/DropDownMenuContext";
import { ThemeContext } from "@/contexts/ThemeContext";

const NavMenu = () => {
  const { menu, changeMenuTo } = useContext(MenuContext) as MenuContext;
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const iconClicked = event.currentTarget.id;

    if (iconClicked === "search") {
      if (menu === "search") {
        changeMenuTo("none");
      } else if (menu === "none") {
        changeMenuTo("search");
      } else if (menu === "notifications") {
        changeMenuTo("search");
      }
    } else if (iconClicked === "notifications") {
      if (menu === "notifications") {
        changeMenuTo("none");
      } else if (menu === "none") {
        changeMenuTo("notifications");
      } else if (menu === "search") {
        changeMenuTo("notifications");
      }
    }
  };

  return (
    <nav className="font-inter">
      <div className="flex flex-row justify-between items-center pt-4 h-full bg-gradient-top">
        <div>
          <div className="relative w-[116px] h-[65px]">
            {theme === "dark" && (
              <div className="relative w-[116px] h-[65px]">
                <Image
                  src="/lightLogo.svg"
                  alt="bill logo"
                  fill={true}
                  priority
                />
              </div>
            )}
            {theme === "light" && (
              <div className="relative w-[116px] h-[65px]">
                <Image
                  src={"/darkLogo.svg"}
                  alt="bill logo"
                  fill={true}
                  priority
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-[20px] pr-8">
          <div id="notifications" onClick={handleClick}>
            {theme === "dark" && (
              <div className="relative w-[30.03px] h-[35px]">
                <Image src={"/bellDark.svg"} alt="notifications" fill={true} />
              </div>
            )}
            {theme === "light" && (
              <div className="relative w-[30.03px] h-[35px]">
                <Image src={"/bellLight.svg"} alt="notifications" fill={true} />
              </div>
            )}
          </div>

          <div id="search" onClick={handleClick}>
            {theme === "dark" && (
              <div className="relative w-[28px] h-[28px]">
                <Image src={"/searchDark.svg"} alt="search" fill={true} />
              </div>
            )}
            {theme === "light" && (
              <div className="relative w-[28px] h-[28px]">
                <Image src={"/searchLight.svg"} alt="search" fill={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

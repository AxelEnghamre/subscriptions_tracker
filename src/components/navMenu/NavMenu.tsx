"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../UI/input/Input";
import CategoryButtons from "../UI/buttons/CategoryButtons";
import Notifications from "../UI/dropdowns/Notifications";

const NavMenu = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [notificationsMenu, setNotificationsMenu] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const iconClicked = event.currentTarget.id;

    if (iconClicked === "search") {
      if (navMenu) {
        setNavMenu(false);
      } else {
        setNavMenu(true);
        setNotificationsMenu(false);
      }
    } else if (iconClicked === "notifications") {
      if (notificationsMenu) {
        setNotificationsMenu(false);
      } else {
        setNavMenu(false);
        setNotificationsMenu(true);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setsearchValue(value);
    console.log(searchValue);
  };

  return (
    <nav className="font-inter">
      <div className="flex flex-row justify-between items-center pt-4 h-full bg-gradient-top">
        <div>
          <div className="relative w-[116px] h-[65px]">
            <Image src={"/darkLogo.svg"} alt="Logo" fill={true} priority />
          </div>
        </div>
        <div className="flex flex-row gap-[20px] pr-8">
          <div id="notifications" onClick={handleClick}>
            <Image
              src={"/bell.svg"}
              alt="notifications"
              width={30.03}
              height={35}
            />
          </div>

          <div id="search" onClick={handleClick}>
            <Image src={"/search.svg"} alt="search" width={28} height={28} />
          </div>
        </div>
      </div>

      {/* <div
        className={`bg-gradient-to-b from-gradient-top to-gradient-bottom h-[auto] rounded-b-3xl w-full flex-col pr-8 pl-6 pt-10 fixed gap-8 ${
          !notificationsMenu ? "hidden" : "flex"
        }`}
      >
        <Notifications />
      </div> */}

      {/* <div
        className={`bg-gradient-to-b from-gradient-top to-gradient-bottom h-[auto] rounded-b-3xl w-full flex-col pr-8 pl-6 pt-10 fixed gap-8 ${
          !navMenu ? "hidden" : "flex"
        }`}
      >
        <div className=" flex flex-col gap-10">
          <div className="flex flex-row pt-2 items-center gap-4">
            <Input
              className="focus:outline-none border-solid border-bill border-[2px] appearance-none bg-searchbar-foreground"
              type="search"
              name="search"
              placeholder="Sök"
              value={searchValue}
              onChange={handleChange}
              id="search"
            />
            <p
              onClick={() => {
                setsearchValue("");
              }}
            >
              Avbryt
            </p>
          </div>

          <div>
            <CategoryButtons />
          </div>
        </div>

        <div className="flex justify-center items-center pb-5">
          <div className="bg-logo w-[43px] h-[4px] rounded"></div>
        </div>
      </div> */}
    </nav>
  );
};

export default NavMenu;

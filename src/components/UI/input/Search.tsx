"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./Input";
import CategoryButton from "../buttons/CategoryButton";
import Notifications from "../dropdowns/Notifications";

const Search = () => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const [notificationsMenu, setNotificationsMenu] = useState(false);
  const [categoryList, setCategoryList] = useState([
    {
      id: "musik",
      name: "Musik",
      icon: "/music.svg",
    },
    {
      id: "nöje",
      name: "Nöje",
      icon: "/pleasure.svg",
    },
    {
      id: "livsstil",
      name: "Livsstil",
      icon: "/lifestyle.svg",
    },
    ,
    {
      id: "böcker",
      name: "Böcker",
      icon: "/books.svg",
    },
    ,
    {
      id: "spel",
      name: "Spel",
      icon: "/games.svg",
    },
    ,
    {
      id: "träning",
      name: "Träning",
      icon: "/fitness.svg",
    },
  ]);
  const [searchValue, setsearchValue] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const iconClicked = event.currentTarget.id;

    if (iconClicked === "search") {
      if (navMenuIsOpen) {
        setNavMenuIsOpen(false);
      } else {
        setNavMenuIsOpen(true);
        setNotificationsMenu(false);
      }
    } else if (iconClicked === "notifications") {
      if (notificationsMenu) {
        setNotificationsMenu(false);
      } else {
        setNavMenuIsOpen(false);
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
    <nav className="z-30 font-inter">
      <div className="flex flex-row justify-between items-center pt-4 h-full bg-gradient-top">
        <div>
          <Image
            src={"/darkLogo.svg"}
            alt="Logo"
            width={116}
            height={65}
            priority
          />
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

          <div onClick={handleClick} id="search">
            <Image src={"/search.svg"} alt="search" width={28} height={28} />
          </div>
        </div>
      </div>

      <div
        className={`bg-gradient-to-b from-gradient-top to-gradient-bottom h-[auto] rounded-b-3xl w-full flex-col pr-8 pl-6 pt-10 absolute gap-8 ${
          !notificationsMenu ? "hidden" : "flex"
        }`}
      >
        <Notifications id="notifications" className=""/>
      </div>

      <div
        className={`bg-gradient-to-b from-gradient-top to-gradient-bottom h-[auto] rounded-b-3xl w-full flex-col pr-8 pl-6 pt-10 absolute gap-8 ${
          !navMenuIsOpen ? "hidden" : "flex"
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
            <ul className="flex flex-row gap-4 flex-wrap">
              {categoryList.map((data) => {
                if (data != undefined) {
                  return (
                    <CategoryButton
                      id={data.id}
                      className="items-center bg-searchbar-foreground rounded-3xl"
                      key={data.id}
                      name={data.name}
                      source={data.icon}
                      value={data.name}
                      onClick={() => {
                        console.log(data.id);
                      }}
                    />
                  );
                }
              })}
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center pb-5">
          <div className="bg-logo w-[43px] h-[4px] rounded"></div>
        </div>
      </div>
    </nav>
  );
};

export default Search;

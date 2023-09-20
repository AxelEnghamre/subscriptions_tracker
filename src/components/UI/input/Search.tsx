"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./Input";
import CategoryButton from "../buttons/CategoryButton";

const Search = () => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      name: "Musik",
      icon: "/music.svg",
    },
    {
      id: 2,
      name: "Nöje",
      icon: "/pleasure.svg",
    },
    {
      id: 3,
      name: "Livsstil",
      icon: "/lifestyle.svg",
    },
    ,
    {
      id: 4,
      name: "Böcker",
      icon: "/books.svg",
    },
    ,
    {
      id: 5,
      name: "Spel",
      icon: "/games.svg",
    },
    ,
    {
      id: 6,
      name: "Träning",
      icon: "/fitness.svg",
    },
  ]);
  const [searchValue, setsearchValue] = useState("");

  const handleClick = () => {
    if (navMenuIsOpen) {
      console.log("closed");
      setNavMenuIsOpen(false);
    } else {
      console.log("open");
      setNavMenuIsOpen(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setsearchValue(value);
    console.log(searchValue);
    // TODO show errors
  };

  return (
    <nav className="z-30">
      <div className="flex flex-row justify-between items-center pb-[40px] pt-[10px] h-[115px]">
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
          <div>
            <Image
              src={"/bell.svg"}
              alt="notifications"
              width={30.03}
              height={35}
            />
          </div>

          <div>
            <Image
              src={"/search.svg"}
              alt="notifications"
              width={28}
              height={28}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>

      <div
        className={`bg-red-400 h-[auto] rounded-b-3xl w-full flex-col pr-8 pl-6 absolute gap-8 ${
          !navMenuIsOpen ? "hidden" : "flex"
        }`}
      >
        <div className=" flex flex-col gap-10">
          <div className="flex flex-row pt-2 items-center gap-4">
            <Input
              className="focus:outline-none border-solid border-bill border-[2px] appearance-none"
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
                      className="items-center bg-white rounded-3xl"
                      key={data.id}
                      name={data.name}
                      source={data.icon}
                      value={data.name}
                      onClick={() => {
                        console.log(data.name.toLocaleLowerCase());
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
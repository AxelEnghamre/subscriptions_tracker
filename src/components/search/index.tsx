"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../UI/input/Input";
import CategoryButton from "../UI/buttons/CategoryButton";

const Search = () => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      name: "Musik",
      icon: "/lock.svg",
    },
    {
      id: 2,
      name: "Nöje",
      icon: "/lock.svg",
    },
    {
      id: 3,
      name: "Livsstil",
      icon: "/lock.svg",
    },
    ,
    {
      id: 4,
      name: "Böcker",
      icon: "/lock.svg",
    },
    ,
    {
      id: 5,
      name: "Spel",
      icon: "/lock.svg",
    },
    ,
    {
      id: 6,
      name: "Träning",
      icon: "/lock.svg",
    },
  ]);

  const handleClick = () => {
    if (navMenuIsOpen) {
      console.log("closed");
      setNavMenuIsOpen(false);
    } else {
      console.log("open");
      setNavMenuIsOpen(true);
    }
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

      <div className="bg-red-400 h-[354px] rounded-b-3xl w-full flex flex-col justify-between">
        <div className="">
          <div className="flex flex-row pt-2 items-center">
            <Input
              className="ml-6"
              type="search"
              name="search"
              placeholder="Sök"
              value="nvef"
              onChange={() => {
                console.log("hello");
              }}
              id="search"
            />
            <p className="mr-8 ml-4">Avbryt</p>
          </div>

          <div>
            <ul>
              {categoryList.map((data) => {
                return (
                  <CategoryButton
                    className="items-center bg-white rounded-3xl"
                    key={data.id}
                    name={data.name}
                    source={data.icon}
                    onClick={() => {
                      console.log("hello");
                    }}
                  />
                );
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

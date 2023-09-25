"use client";

import Input from "../Input";
import { useEffect, useState } from "react";
import CategoryButtons from "../buttons/CategoryButtons";

const Search = ({ className }: { className?: string }) => {
  const [searchValue, setsearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setsearchValue(value);
    console.log(searchValue);
  };
  return (
    <div
      className={`bg-gradient-to-b from-gradient-top to-gradient-bottom h-[auto] rounded-b-3xl w-full flex-col pr-8 pl-6 pt-10 fixed gap-8 flex ${className}`}
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
    </div>
  );
};

export default Search;

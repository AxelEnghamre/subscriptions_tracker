import CategoryButton from "./CategoryButton";
import { useState } from "react";

const CategoryButtons = () => {
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
  return (
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
  );
};

export default CategoryButtons;

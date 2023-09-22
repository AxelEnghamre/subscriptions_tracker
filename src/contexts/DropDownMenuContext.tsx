"use client";

import { createContext, useEffect, useState } from "react";

type Menus = "search" | "notifications" | "none";

type MenuContext = {
  menu: Menus;
  changeMenuTo: (menu: Menus) => void;
};

const MenuContext = createContext<MenuContext | null>(null);

const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState<Menus>("none");

  const changeMenuTo = (buttonClicked: Menus) => {
    if (buttonClicked === "search") {
      setMenu("search");
    } else if (buttonClicked === "notifications") {
      setMenu("notifications");
    } else if (buttonClicked === "none") {
      setMenu("none");
    }
  };

  return (
    <MenuContext.Provider value={{ menu, changeMenuTo }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuContextProvider };

"use client";

import Notifications from "./Notifications";
import Search from "./Serach";
import { MenuContext } from "@/contexts/DropDownMenuContext";
import { useContext, useEffect, useState } from "react";

const DropDownContainer = () => {
  const { menu, changeMenuTo } = useContext(MenuContext) as MenuContext;
  const [searchMenu, setSearchMenu] = useState(false);
  const [notificationsMenu, setNotificationsMenu] = useState(false);

  useEffect(() => {
    if (menu === "search") {
      setSearchMenu(true);
      setNotificationsMenu(false);
    } else if (menu === "notifications") {
      setNotificationsMenu(true);
      setSearchMenu(false);
    } else if (menu === "none") {
      setNotificationsMenu(false);
      setSearchMenu(false);
    }
  }, [menu]);
  return (
    <div>
      <Notifications
        // className={`z-20 ${notificationsMenu ? "flex" : "hidden"}`}
        className="z-20"
        openState={notificationsMenu}
      />
      <Search 
        // className={`z-20 ${searchMenu ? "flex" : "hidden"}`}
        className="z-20"
        openState={searchMenu}
       />
    </div>
  );
};

export default DropDownContainer;

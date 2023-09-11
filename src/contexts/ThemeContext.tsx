"use client";

import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type Themes = "light" | "dark";

type ThemeContext = {
  theme: Themes;
  changeThemeTo: (param: Themes) => void;
};

const ThemeContext = createContext<ThemeContext | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>("light");

  useEffect(() => {
    if (Cookies.get("theme") === "dark") {
      setTheme("dark");
      document.body.classList.add("darkTheme");
    }
  }, []);

  const changeThemeTo = (themeFromInput: Themes) => {
    if (themeFromInput === "dark") {
      document.body.classList.add("darkTheme");
      Cookies.set("theme", "dark");
    } else {
      document.body.classList.remove("darkTheme");
      Cookies.remove("theme");
    }

    // Rerender where the theme state
    setTheme(themeFromInput);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeThemeTo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };

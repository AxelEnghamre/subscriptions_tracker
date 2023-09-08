"use client";

import { createContext, useState } from "react";

type Themes = "light" | "dark";

type ThemeContext = {
  theme: Themes;
  changeThemeTo: (param: Themes)=> void;
};

const ThemeContext = createContext<ThemeContext | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>("light");

  const changeThemeTo = (themeFromInput: Themes) => {
    if(themeFromInput === "dark") {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }

    // Rerender where the theme state
    setTheme(themeFromInput);
  }

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

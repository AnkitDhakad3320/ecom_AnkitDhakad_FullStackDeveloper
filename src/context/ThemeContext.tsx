import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeKey, themes } from "../themes/Themes";

interface ThemeContextProps {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme1",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeKey>(() => {
    return (localStorage.getItem("app-theme") as ThemeKey) || "theme1";
  });

  const setTheme = (theme: ThemeKey) => {
    setThemeState(theme);
    localStorage.setItem("app-theme", theme);
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

"use client";
import type React from "react";
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import storage from "../../lib/modules/storage";

interface Theme {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  handleThemeSwitch: () => void;
}

export const NavbarContext = createContext<Theme | undefined>(undefined);

export const useNavContext = () => {
  const nav = useContext(NavbarContext);

  if (nav === undefined)
    throw new Error("useNavContext must be used with a NavbarContext");

  return nav;
};

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(storage.isDarkThemeEnabled());

  useEffect(() => {
    if (isDarkMode) document.body.setAttribute("data-theme-dark", "");
    else document.body.removeAttribute("data-theme-dark");
    storage.setDarkThemeEnalbled(isDarkMode);
  }, [isDarkMode]);

  const handleThemeSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <NavbarContext.Provider
      value={{ isDarkMode, setIsDarkMode, handleThemeSwitch }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

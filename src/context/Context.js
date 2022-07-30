import React, { useState, useContext, useEffect } from "react";
import useLocalStorage from "../utility/useLocalStorage";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // align gradient
  const [align, setAlign] = useState("left");

  // rotate gradients
  const rotate = () => {
    if (align === "left") {
      setAlign("right");
    } else if (align === "right") {
      setAlign("top");
    } else if (align === "top") {
      setAlign("bottom");
    } else {
      setAlign("left");
    }
  };

  // // saved gradients
  // const [savedGradients, setSavedGradients] = useLocalStorage("saved", []);

  // dark mode
  const [darkMode, setDarkMode] = useState(false);

  //   Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem("darkMode", !darkMode);
  };

  //   Useeffect for dark mode
  useEffect(() => {
    if (window.localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else {
      setDarkMode(false);
      window.localStorage.setItem("darkMode", false);
    }
  });

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleDarkMode,
        align,
        setAlign,
        rotate,
        // savedGradients,
        // setSavedGradients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

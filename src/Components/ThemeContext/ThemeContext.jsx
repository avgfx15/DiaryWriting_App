import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from local storage or default to light
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove existing theme classes
    root.classList.remove(
      "theme_Dark",
      "theme_Gray",
      "theme_Green",
      "theme_Blue",
      "theme_Purple",
      "theme_Black"
    );
    console.log(theme);
    // Add the new theme class, unless it's the default 'light' theme
    if (theme !== "light") {
      root.classList.add(`theme_${theme}`);
    }

    // Save the theme to local storage

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const useTheme = () => {
//   const context = useContext(ThemeContext);

//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };

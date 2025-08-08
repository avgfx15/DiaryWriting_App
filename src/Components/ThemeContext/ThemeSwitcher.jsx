import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

const themesName = [
  "Pink",
  "Gray",
  "Green",
  "Blue",
  "Purple",
  "Slate",
  "Black",
];
const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center space-x-2 bg-primary text-primary">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 bg-accent text-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-focus"
        >
          <span className="capitalize">{theme}</span>
          <svg
            className={`ml-2 h-4 w-4 inline-block transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-primary text-primary rounded-md shadow-lg z-10">
            {themesName.map((t) => (
              <button
                key={t}
                onClick={() => handleThemeChange(t)}
                className={`p-2 rounded-md font-body ${
                  theme === t ? "ring-2 ring-accent" : ""
                }`}
              >
                <span className="capitalize">{t} Theme</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;

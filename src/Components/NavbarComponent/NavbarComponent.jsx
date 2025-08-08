import React from "react";
import ThemeSwitcher from "../ThemeContext/ThemeSwitcher";

const NavbarComponent = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  return (
    <div className="flex justify-between items-center px-10 py-5 gap-5 bg-primary text-primary">
      <div className="flex justify-between items-center gap-5">
        <img src="/2.ico" alt="logo" className="w-10 h-10" />
        <h1 className="text-2xl uppercase font-semibold">Stacodev</h1>
      </div>
      <div className="w-3/5">
        <ul className="flex ms-5 items-center gap-5">
          <li className="text-lg uppercase font-semibold hover:text-slate-300 transition duration-300">
            Home
          </li>
          <li className="text-lg uppercase font-semibold hover:text-slate-300 transition duration-300">
            About
          </li>
          <li className="text-lg uppercase font-semibold hover:text-slate-300 transition duration-300">
            Contact
          </li>
        </ul>
      </div>
      {isUserLoggedIn ? (
        <div className="text-lg uppercase font-semibold hover:text-slate-300 transition duration-300">
          User Profile
        </div>
      ) : (
        <div>
          <button className="bg-slate-300 text-slate-900 py-2 px-5 rounded-md hover:bg-slate-400 transition duration-300">
            Login
          </button>
        </div>
      )}

      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavbarComponent;

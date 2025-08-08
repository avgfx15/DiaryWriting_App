import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";

const HomeComponent = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  return (
    <div className="w-full">
      <NavbarComponent
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    </div>
  );
};

export default HomeComponent;

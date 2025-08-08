import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import DiaryInputComponent from "../DiaryInputComponent/DiaryInputComponent";

const HomeComponent = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  return (
    <div className="w-full">
      <NavbarComponent
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <DiaryInputComponent />
    </div>
  );
};

export default HomeComponent;

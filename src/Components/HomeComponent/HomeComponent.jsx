import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import DiaryInputComponent from "../DiaryInputComponent/DiaryInputComponent";
import { useState } from "react";

const HomeComponent = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  const [showDiaryEntryForm, setShowDiaryEntryForm] = useState(false);

  return (
    <div className="w-full">
      <NavbarComponent
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        showDiaryEntryForm={showDiaryEntryForm}
        setShowDiaryEntryForm={setShowDiaryEntryForm}
      />
      {showDiaryEntryForm && <DiaryInputComponent />}
    </div>
  );
};

export default HomeComponent;

import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import DiaryInputComponent from "../DiaryInputComponent/DiaryInputComponent";
import { useState } from "react";
import DiaryDataDisplayComponent from "../DiaryDataDisplay/DiaryDataDisplayComponent";

// $ Main Function
const HomeComponent = ({
  isUserLoggedIn,
  setIsUserLoggedIn,
  addNewData,
  allDiaryData,
  setAllDiaryData,
}) => {
  // @ Show Diary Entry Form
  const [showDiaryEntryForm, setShowDiaryEntryForm] = useState(false);

  // $ Render Function
  return (
    <div className="w-full">
      <NavbarComponent
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        showDiaryEntryForm={showDiaryEntryForm}
        setShowDiaryEntryForm={setShowDiaryEntryForm}
      />
      {showDiaryEntryForm && (
        <DiaryInputComponent
          addNewData={addNewData}
          allDiaryData={allDiaryData}
          setAllDiaryData={setAllDiaryData}
        />
      )}
      <DiaryDataDisplayComponent allDiaryData={allDiaryData} />
    </div>
  );
};

export default HomeComponent;

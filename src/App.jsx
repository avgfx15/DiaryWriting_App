import React from "react";

// | Import Css
import "./App.css";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import { useState } from "react";
import {
  getAllDiaryDataFromStorage,
  setAllDiaryDataToStorage,
} from "./DataStorage";
import { useEffect } from "react";

const App = () => {
  // @ User is LoggedIn or Not
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  // @ Diary Data
  const [allDiaryData, setAllDiaryData] = useState(() =>
    getAllDiaryDataFromStorage()
  );

  // + Add New Data
  const addNewData = (newData) => {
    const { time, date, content, remark } = newData;

    if (!time || !date || !content || !remark) {
      alert("Please fill all the fields");
      return;
    }

    const id = allDiaryData.length + 1;

    newData.id = id;
    setAllDiaryData([...allDiaryData, newData]);

    // + Save Data to Local Storage
    setAllDiaryDataToStorage([...allDiaryData, newData]);
  };

  useEffect(() => {
    getAllDiaryDataFromStorage();
  }, [allDiaryData]);

  // $ Render Function
  return (
    <div className="flex justify-center h-screen bg-accent">
      <HomeComponent
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        addNewData={addNewData}
        allDiaryData={allDiaryData}
        setAllDiaryData={setAllDiaryData}
      />
    </div>
  );
};

export default App;

import React from "react";

// | Import Css
import "./App.css";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import { useState } from "react";

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <div className="flex justify-center h-screen bg-gray-300">
      <HomeComponent
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Banner from "../banner/Banner";
import PopularCLass from "../popularClass/PopularCLass";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import Reviews from "../reviews/Reviews";
import { darkTheme, lightTheme } from "../theme/theme";


const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClass = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div className={`transition duration-500 ${themeClass}`}>
      <button
        className="fixed z-10 top-7 right-36 px-4 py-2 bg-amber-600 rounded-full shadow-lg"
        onClick={toggleTheme}
      >
        {isDarkTheme ? "Light" : "Dark"}
      </button>
      <Banner />
      <PopularCLass />
      <PopularInstructors />
      <Reviews />
      
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Banner from "../banner/Banner";
import PopularCLass from "../popularClass/PopularCLass";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import Reviews from "../reviews/Reviews";
import { darkTheme, lightTheme } from "../theme/theme";
import {MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import TotalStudent from "../total/Total";
import Events from "../upcoming-events/Events";


const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClass = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div className={`transition duration-500 ${themeClass}`}>
      <button
        className="fixed z-10 top-7 right-16 lg:right-36 px-4 py-2 bg-amber-500 rounded-full shadow-lg "
        onClick={toggleTheme}
        
      >
        {isDarkTheme ?<SunIcon className="h-6 w-6"/> : <MoonIcon className="h-6 w-6"/> }
      </button>
      <Banner />
      <PopularCLass />
      <PopularInstructors />
      <TotalStudent />
      <Events/>
      <Reviews />
      
    </div>
  );
};

export default Home;

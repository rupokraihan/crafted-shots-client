import React from 'react';
import CountUp from "react-countup";
import {AcademicCapIcon,NewspaperIcon,LinkIcon,FilmIcon  } from "@heroicons/react/24/solid";



const TotalStudent = () => {
  return (
    <div className="w-full h-[610px]  lg:h-64 bg-gradient-to-r from-indigo-400 from-20% via-sky-400 via-60% to-sky-400 to-80">
      <div className="lg:flex justify-between text-white lg:px-40 py-10">
        <div className="text-center mb-6">
          <AcademicCapIcon className="h-12 lg:h-20 mx-auto"></AcademicCapIcon>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wider">
            Students
          </h2>
          <CountUp
            className="text-2xl lg:text-4xl font-semibold font-sans"
            start={0}
            end={1200}
            duration={9.5}
            formattingFn={(value) => `${value}+`}
          />
        </div>
        <div className="text-center mb-6">
          <NewspaperIcon className="h-12 lg:h-20 mx-auto"></NewspaperIcon>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wider">
            Instructors
          </h2>
          <CountUp
            className="text-2xl lg:text-4xl font-semibold font-sans"
            start={0}
            end={260}
            duration={9.5}
            formattingFn={(value) => `${value}+`}
          />
        </div>
        <div className="text-center mb-6">
          <LinkIcon className="h-12 lg:h-20 mx-auto"></LinkIcon>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wider">
            Awards
          </h2>
          <CountUp
            className="text-2xl lg:text-4xl font-semibold font-sans"
            start={0}
            end={40}
            duration={9.5}
            formattingFn={(value) => `${value}+`}
          />
        </div>
        <div className="text-center mb-6">
          <FilmIcon className="h-12 lg:h-20 mx-auto"></FilmIcon>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif tracking-wider">
            Courses
          </h2>
          <CountUp
            className="text-2xl lg:text-4xl font-semibold font-sans"
            start={0}
            end={220}
            duration={9.5}
            formattingFn={(value) => `${value}+`}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalStudent;
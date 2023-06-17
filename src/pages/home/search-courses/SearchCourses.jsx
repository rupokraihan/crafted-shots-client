import React from "react";
import cameraMan from "../../../assets/camera-man/pexels-pok-rie-305086-removebg.png";

const SearchCourses = () => {
  return (
    <div className="bg-gray-200">
      <section className="my-container">
        <div className="lg:flex">
          <div className="lg:w-4/5  shadow-2xl shadow-white bg-white rounded-lg p-6 lg:p-20">
            <div>
              <h1 className="text-center text-4xl mb-16 mt-12 font-bold tracking-wider">
                Search For Photography Courses
              </h1>
            </div>
            <div >
              <div className="lg:flex gap-6 mb-4">
                <input
                  type="text"
                  className="w-full lg:w-96 bg-gray-200 mb-4  px-6 py-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  placeholder="Keywords "
                />
                <input
                  type="text"
                  className="w-full lg:w-96 bg-gray-200  px-6 py-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  placeholder="Class ID "
                />
              </div>
              <div className="mb-4 lg:flex gap-6">
                <div>
                  <select
                    defaultValue="Select a Class"
                    className="select select-bordered w-full lg:w-96 h-16 mb-4 text-gray-500 bg-gray-200  px-6   font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option>Select a Class</option>
                    <option>Wildlife and Nature Photography</option>
                    <option>Camera Basics</option>
                    <option>Lighting and Composition</option>
                    <option>Landscape and Nature Photography</option>
                    <option>Sports and Action Photography</option>
                    <option>Street Photography</option>
                  </select>
                </div>
                <div>
                  <select
                    defaultValue=" Batch "
                    className="select select-bordered w-full lg:w-96 h-16 text-gray-500 bg-gray-200  px-6 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option> Batch </option>
                    <option>Artistic Apertures</option>
                    <option>Lens Luminaries</option>
                    <option>Shutter Sages</option>
                    <option>Visionary Vantage</option>
                  </select>
                </div>
              </div>
              <div className="lg:flex gap-6 mb-4">
                <div>
                  <select
                    defaultValue="Level"
                    className="select select-bordered w-full mb-4 lg:w-96 h-16 text-gray-500 bg-gray-200  px-6 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option>Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <select
                    defaultValue=" Experiences "
                    className="select select-bordered w-full lg:w-96 h-16 text-gray-500 bg-gray-200  px-6 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option> Experiences </option>
                    <option>Local Photography Clubs</option>
                    <option>Photography Blogs</option>
                    <option>Online Communities and Forums</option>
                    <option>Tutorials and Guides</option>
                  </select>
                </div>
              </div>
              <div className="lg:flex gap-6 mb-4">
                <div>
                  <select
                    defaultValue="Instructor"
                    className="select select-bordered w-full mb-4 lg:w-96 h-16 text-gray-500 bg-gray-200  px-6 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option>Instructor</option>
                    <option>David Wilson</option>
                    <option>Emily Thompson</option>
                    <option>Jane Doe</option>
                    <option>John Smith</option>
                    <option>Michael Johnson</option>
                    <option>Sarah Davis</option>
                  </select>
                </div>
                <div>
                  <select
                    defaultValue=" Duration "
                    className="select select-bordered w-full lg:w-96 h-16 text-gray-500 bg-gray-200  px-6 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option> Duration </option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>9 Months</option>
                    <option>12 Months</option>
                  </select>
                </div>
              </div>
              <div className="lg:flex gap-6 mb-4">
                <div>
                  <select
                    defaultValue="Branch"
                    className="select select-bordered w-full mb-4 lg:w-96 h-16 text-gray-500 bg-gray-200  px-6 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option>Branch</option>
                    <option>Kenai, Alaska 99611</option>
                    <option> Craig, Alaska 99921</option>
                    <option>Ketchikan, Alaska 99901, USA</option>
                  </select>
                </div>
                <div>
                  <select
                    defaultValue=" Batch Time "
                    className="select select-bordered w-full lg:w-96 h-16 text-gray-500 bg-gray-200  px-6 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                  >
                    <option> Batch Time </option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
              <div className="flex  justify-center mt-6">
                <button className="my-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <img className="w-full" src={cameraMan} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchCourses;

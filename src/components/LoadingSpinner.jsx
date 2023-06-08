import React from "react";
// import loading from "../../src/assets/loading/loading.gif";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {/* <img className="w-28 h-28" src={loading} alt="" /> */}
        </div>
        <h1 className="text-8xl font-thin text-blue-500">Loading</h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
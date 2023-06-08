import React from "react";
import loadingLogo from "../../src/assets/loading/gear-loader.gif";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-184px)]">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img className="w-72 h-72" src={loadingLogo} alt="" />
        </div>
        <h1 className="text-9xl font-serif tracking-wider text-amber-500	">
          Loading...
        </h1>
      </div>
      
    </div>
  );
};

export default LoadingSpinner;
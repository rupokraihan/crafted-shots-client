import React from "react";
import mail from "../../../assets/mail/mail.jpg";

const Subscribe = () => {
  return (
    <div className="relative h-96">
      <img className="absolute h-full w-full object-cover " src={mail} alt="" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-50 text-center font-sans">
        <h2 className="text-4xl font-bold tracking-wider">
          Subscribe to Our Photography Newsletter
        </h2>
        <p className="text-lg text-gray-200 font-semibold tracking-wider">
          Get the latest Photography resources on the market delivered to your
          inbox
        </p>
        <div className="join mt-6">
          <input
            className="input input-bordered text-black join-item rounded-l-full placeholder-gray-700"
            placeholder="Email"
            required
          />
          <button className="btn border-0 bg-amber-400 text-bold tracking-wider join-item rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

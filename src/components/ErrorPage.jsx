import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../src/assets/error/featured-404-error-image-removebg-preview.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className=" h-screen mx-auto p-16 text-gray-900">
      <div className="">
        <div className="lg:flex lg:mt-40 items-center justify-evenly">
          <div>
            <img src={errorImg} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-9xl font-extrabold mb-20 text-gray-600">404</h1>
            <h2 className="text-5xl tracking-widest	font-bold">
              Ahh! You see! You can be Wrong! <br />
              <span className="text-xl text-gray-400">
                (or it could be us)...
              </span>
            </h2>

            <h2 className="text-xl tracking-widest mt-4">
              What you’re looking for may have been misplaced in Long Term
              Memory.
            </h2>
            <Link
              to="/"
              className="inline-flex items-center h-14 px-6 mb-3 text-xl font-bold transition duration-200 rounded shadow-md  md:mb-0 bg-amber-400 hover:bg-gray-500 mt-16"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

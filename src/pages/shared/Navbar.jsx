import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo/Crafted_Shots__1_-removebg-preview.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div>
      <div className="text-lg fixed z-10 bg-opacity-40 bg-gray-200 pt-3 pb-4  mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-0">
        <div>
          <div className="relative  flex items-center justify-between px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
            <div className="flex items-center gap-4 ">
              {/* logo */}
              <div>
                <img className="h-[80px] w-[150px]" src={logo} alt="" />
              </div>

              <div>
                <Link to="/" className="inline-flex items-center">
                  <span className="ml-2 text-white font-sans text-4xl font-bold tracking-wide">
                    toyHaven Ville
                  </span>
                </Link>
              </div>
            </div>

            <ul className="items-center text-white text-ellipsis hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alltoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  All Toys
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>

            {/* Mobile Navbar Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
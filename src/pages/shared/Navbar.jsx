import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo/Crafted_Shots__1_-removebg-preview.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };



  return (
    <div>
      <div className="text-lg fixed z-10 bg-opacity-70 bg-gray-800 pt-3 pb-4  mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-0">
        <div>
          <div className="relative  flex items-center justify-between px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
            <div className="flex items-center gap-4 ">
              {/* logo */}
              <div>
                <img className="h-[80px] w-[150px]" src={logo} alt="" />
              </div>

              <div>
                <Link to="/" className="inline-flex items-center">
                  <span className=" text-white font-sans text-4xl font-bold tracking-wide">
                    Crafted Shots
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
                  Instructors
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Classes
                </NavLink>
              </li>

              {/* Conditional rendering*/}
              {user && (
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}

              <li>
                {/* Conditional rendering for user profile and login/logout */}
                {user ? (
                  <>
                    <div className="flex gap-6 items-center space-x-2">
                      {/* Sign Out button */}
                      <NavLink
                        onClick={handleLogout}
                        className={({ isActive }) =>
                          isActive ? "default" : "active"
                        }
                      >
                        Sign out
                      </NavLink>
                      {/* User profile picture */}
                      <div className="w-11 h-11 rounded-full ring relative">
                        <img
                          className="rounded-full w-11 h-11 hover:opacity-75"
                          src={user.photoURL}
                          alt=""
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Login
                  </NavLink>
                )}
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
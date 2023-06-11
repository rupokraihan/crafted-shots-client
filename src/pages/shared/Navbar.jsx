import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo/Crafted_Shots_logo.png"
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="text-lg fixed z-10 bg-opacity-90 bg-gray-900 pt-2 pb-3  mx-auto  w-full">
        <div>
          <div className="relative  flex items-center justify-between px-3 mx-auto  lg:max-w-screen-2xl lg:px-10">
            <div className="flex items-center gap-4 ">
              {/*Website logo */}
              <div>
                <img className="h-[80px] w-[150px]" src={logo} alt="" />
              </div>

              <div>
                <Link to="/" className="inline-flex items-center">
                  <span className=" text-amber-400	 font-sans lg:text-4xl text-2xl font-bold tracking-wide">
                    Crafted Shots
                  </span>
                </Link>
              </div>
            </div>

            <ul className="items-center text-amber-400	text-ellipsis hidden space-x-8 lg:flex">
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
                  to="instructors"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="classes"
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
                          className="rounded-full w-11 h-11"
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
            <div className="lg:hidden">
              {/* Dropdown Open Button */}
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="text-amber-600 hover:text-amber-500 focus:outline-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <Bars3BottomRightIcon className="w-8" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className=" bg-gray-800 border rounded shadow-sm">
                    {/* Logo & Button section */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-2">
                        <Link to="/" className="inline-flex items-center">
                          <img
                            className="h-[72px] w-[140px] ml-2"
                            src={logo}
                            alt=""
                          />
                        </Link>
                        <h1 className="text-amber-400 font-bold text-2xl flex items-center">
                          Crafted Shots
                        </h1>
                      </div>
                      {/* Dropdown menu close button */}
                      <div>
                        <button
                          type="button"
                          className="text-amber-600 hover:text-amber-500 focus:outline-none"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <XMarkIcon className="w-8 mt-4 mr-3" />
                        </button>
                      </div>
                    </div>
                    {/* Mobile Nav Items Section */}
                    <nav>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/"
                            className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="instructors"
                            className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                          >
                            Instructors
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/classes"
                            className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                          >
                            Classes
                          </Link>
                        </li>
                        {user && (
                          <li>
                            <NavLink
                              to="/Dashboard"
                              className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                        )}

                        <li>
                          {/* Conditional rendering for user profile and login/logout */}
                          {user ? (
                            <>
                              <div className="gap-6 mb-4">
                                {/* Sign Out button */}
                                <NavLink
                                  onClick={handleLogout}
                                  className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                                >
                                  Sign out
                                </NavLink>
                              </div>
                            </>
                          ) : (
                            <NavLink
                              to="/login"
                              className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                            >
                              Login
                            </NavLink>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

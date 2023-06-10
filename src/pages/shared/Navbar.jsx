import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo/Crafted_Shots__2_-removebg-preview.png";
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
      <div className="text-lg fixed z-10 bg-opacity-90 bg-gray-900 pt-2 pb-3  mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-0">
        <div>
          <div className="relative  flex items-center justify-between px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-10">
            <div className="flex items-center gap-4 ">
              {/* logo */}
              <div>
                <img className="h-[80px] w-[150px]" src={logo} alt="" />
              </div>

              <div>
                <Link to="/" className="inline-flex items-center">
                  <span className=" text-amber-400	 font-sans text-4xl font-bold tracking-wide">
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
                onClick={() => setIsMenuOpen(true)}
              >
                <Bars3BottomRightIcon className="w-5" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    {/* Logo & Button section */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/" className="inline-flex items-center">
                          <span className="ml-2 text-3xl font-bold tracking-wide text-gray-800">
                            toyHaven Ville
                          </span>
                        </Link>
                      </div>
                      {/* Dropdown menu close button */}
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <XMarkIcon className="w-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    {/* Mobile Nav Items Section */}
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/" className="default">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/alltoys"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                          >
                            All Toys
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blogs"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                          >
                            Blog
                          </Link>
                        </li>
                        {user && (
                          <li>
                            <NavLink
                              to="/mytoys"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                            >
                              My Toys
                            </NavLink>
                          </li>
                        )}

                        {user && (
                          <li>
                            <NavLink
                              to="/addtoy"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                            >
                              Add A Toy
                            </NavLink>
                          </li>
                        )}
                        <li>
                          {/* Conditional rendering for user profile and login/logout */}
                          {user ? (
                            <>
                              <div className="lg:flex gap-6 space-x-2">
                                {/* Sign Out button */}
                                <NavLink
                                  onClick={handleLogout}
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                                >
                                  Sign out
                                </NavLink>
                              </div>
                            </>
                          ) : (
                            <NavLink
                              to="/login"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
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

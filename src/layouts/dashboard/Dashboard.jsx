import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";
import logo from "../../assets/logo/Crafted_Shots_logo.png"
import { AdjustmentsHorizontalIcon, ClipboardDocumentCheckIcon, CreditCardIcon, DocumentCheckIcon, DocumentMagnifyingGlassIcon, HomeIcon, MapPinIcon, UserCircleIcon, UserGroupIcon, UserPlusIcon, UsersIcon, ViewColumnsIcon } from "@heroicons/react/24/solid";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  return (
    <div>
      <div className="lg:pl-0 drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mt-20 mx-10">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gray-800 text-amber-400">
            <div>
              <Link to={"/"}>
                <img
                  src={logo}
                  className="w-40 h-30 mx-auto mb-20 lg:mb-44"
                  alt=""
                />
              </Link>
            </div>
            
            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to={"manageclasses"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <DocumentMagnifyingGlassIcon className="text-amber-500 h-6" />
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allusers"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <UserCircleIcon className="text-amber-500 h-6" />
                    Manage Users
                  </NavLink>
                </li>
              </>
            )}

            {isInstructor && (
              <>
                <li>
                  <NavLink
                    to={"addclass"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <UserPlusIcon className="text-amber-500 h-6"></UserPlusIcon>
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"myclasses"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <UserGroupIcon className="text-amber-500 h-6"></UserGroupIcon>
                    My Classes
                  </NavLink>
                </li>
              </>
            )}

            {isStudent && (
              <>
                <li>
                  <NavLink
                    to={"selectedclass"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <DocumentCheckIcon className="text-amber-500 h-6" />
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"gggg"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <AdjustmentsHorizontalIcon className="text-amber-500 h-6" />
                    Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"gg"}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <CreditCardIcon className="text-amber-500 h-6" />
                    Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="border-2 border-gray-300 my-20"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <HomeIcon className="text-amber-500 h-6" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/instructors"}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <UsersIcon className="text-amber-500 h-6" />
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/classes"}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <ClipboardDocumentCheckIcon className="text-amber-500 h-6" />
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <ViewColumnsIcon className="text-amber-500 h-6" />
                Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <MapPinIcon className="text-amber-500 h-6" />
                Contract
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

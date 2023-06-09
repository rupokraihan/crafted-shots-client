import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Dashboard = () => {
  const {user}=useContext(AuthContext)
  return (
    <div>
      <div className="lg:pl-40 drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gray-800 text-amber-400">
            {/* Sidebar content here */}
            <li className="mb-10 text-xl">
              Welcome to Dashboard
              <span className='text-2xl text-white font-semibold tracking-wider'>{user?.displayName}</span>
            </li>

            <li>
              <NavLink
                to={"dashboard/selectedclass"}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Selected Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"gggg"}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Enrolled Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"gg"}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Payment History
              </NavLink>
            </li>

            <div className="border-2  border-gray-300 my-20"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/instructors"}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/classes"}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
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
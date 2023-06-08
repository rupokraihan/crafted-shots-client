import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-332px)]'>

      <Outlet />
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default Main;
import React from "react";
import logo from "../../assets/logo/Crafted_Shots_logo.png";

const Footer = () => {
  return (
    <div className=" bg-gray-800 text-white">
      <footer className=" py-4 lg:py-12 px-6 lg:px-40 flex justify-between items-center">
        <div className="mt-8">
          <div>
            <img className="h-[80px] w-[130px] mr-4" src={logo} alt="" />
          </div>
          <div></div>
        </div>
        <div className="grid  grid-cols-2  lg:grid-cols-3 justify-between gap-x-[6rem] lg:gap-x-[12rem]">
          <div className="mt-6 ">
            <p className="font-bold font-serif tracking-wider ">Our Address</p>{" "}
            <br />
            <p>1536 Stellar Dr, Kenai, Alaska 99611, USA</p>
            <p>Support: crafted@shots.com</p>
            <p>Helpline: (907) 283-6173 , (907) 457-2631</p>
            <p>Available : Mon - Sat, 10:00 AM to 9:00 PM</p>
          </div>

          <div className="mt-6">
            <p className="font-bold font-serif tracking-wider ">Useful Links</p>{" "}
            <br />
            <a className="link link-hover">Blog</a>
            <br />
            <a className="link link-hover">Success</a>
            <br />
            <a className="link link-hover">Refund policy</a> <br />
            <a className="link link-hover">Terms and Conditions</a>
            <br />
          </div>

          <div className="mt-6">
            <p className="font-bold font-serif tracking-wider ">Social</p>{" "}
            <br />
            <a className="link link-hover">Twitter</a> <br />
            <a className="link link-hover">Instagram</a> <br />
            <a className="link link-hover">Facebook</a> <br />
            <a className="link link-hover">Github</a> <br />
          </div>
        </div>
      </footer>
      <div className="py-6 text-sm text-center text-white tracking-widest">
        © 2023 Crafted Shots Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

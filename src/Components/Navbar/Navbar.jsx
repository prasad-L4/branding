import React from "react";
import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev); // Toggle the menu state
    };
  return (
    <>
   <header className="w-full h-[94px] bg-yellow-300 flex justify-center items-center">
      <div className="flex w-[90%] justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0 justify-center items-center">
          <img
            className="w-[125px] h-[34px]"
            src="/Assets/logo.png"
            alt="Logo"
          />
        </div>

        {/* Menu and Send Message Button */}
        <div className="flex justify-end gap-7 items-center">
          <div className="flex justify-end ml-auto lg:justify-center lg:items-center space-x-9 font-grotesk font-medium text-[18px] cursor-pointer lg:flex">
            <ul className="flex justify-center items-center space-x-9 hidden lg:flex">
              <li>Home</li>
              <li>Agency</li>
              <li className="text-gray-400">Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Send a Message Button */}
          <button className="flex lg:justify-center hidden sm:block lg:items-center gap-2 text-[13px] font-medium outline-none border relative group px-5 py-3 overflow-hidden cursor-pointer text-black ml-auto">
            <span className="btn__visible inline-flex items-center gap-1 w-full h-full transition-all duration-200 group-hover:translate-y-[-100%] group-hover:text-white">
              <MdOutlineEmail /> Send a message
            </span>
            <span className="btn__invisible absolute inline-flex items-center h-full gap-1 w-full bottom-[-100%] left-0 px-4 py-2 group-hover:bottom-0 transition-all duration-200 group-hover:text-white group-hover:bg-black">
              <MdOutlineEmail className="group-hover:bg-black" /> Send a message
            </span>
          </button>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden text-[24px]">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <RiCloseFill /> // Show Close Icon when menu is open
              ) : (
                <RiMenu5Fill /> // Show Menu Icon when menu is closed
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] bg-red-500 text-white transition-transform duration-500 ${isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}
        style={{ transition: "transform 0.5s ease-in-out" }} // Smooth transition
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 font-medium">
          <li>Home</li>
          <li>Agency</li>
          <li className="text-gray-400">Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>

    </>
  );
};

export default Navbar;

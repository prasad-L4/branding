import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiCloseFill, RiMenu5Fill } from 'react-icons/ri';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    if (!isMenuOpen) {
    
      gsap.to('.main-nav', {
        marginLeft: '-110%', 
        duration: 0.5,
        ease: 'power2.inOut',
      });
      gsap.to('.sidebar', {
        x: 0, 
        duration: 0.5,
        ease: 'power2.inOut',
      });
    } else {
   
      gsap.to('.main-nav', {
        marginLeft: '0px', 
        duration: 0.5,
        ease: 'power2.inOut',
      });
      gsap.to('.sidebar', {
        x: '100%', 
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <header className="w-full fixed z-50 h-[94px]  flex justify-center items-center">
      <div className="main-nav flex w-[90%] justify-between items-center">
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
              {isMenuOpen ? <RiCloseFill /> : <RiMenu5Fill />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className="sidebar fixed top-0 right-0 w-[60%] h-full bg-black shadow-lg flex items-center transform translate-x-[100%] transition-transform duration-300 ease-in-out"
      >
        <ul className="flex gap-4 font-grotesk  bg-black  text-white flex-col p-5 px-20 w-[100%] space-y-4">
          <li className='bg-black' >Home</li>
          <hr className='w-full' />
          <li className='bg-black'>Agency</li>
          <hr />
          <li className='bg-black'>Services</li>
          <hr />
          <li className='bg-black'>Portfolio</li>
          <hr />
          <li className='bg-black'>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

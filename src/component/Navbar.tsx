"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<div className="fixed top-0 left-0 h-[100px] w-full max-w-[1520px] flex items-center justify-between px-4 py-2 border-gray-200 border-b-2 bg-white z-50">
{/* Left Section: Logo */}
      <div className="flex items-center">
        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Logo */}
        <h1 className="text-[#3563E9] font-bold text-[28px] ml-4 md:ml-8 mb-2">MORENT</h1>
      </div>

      {/* Search and Icons Section */}
      <div className="hidden md:flex items-center justify-between w-full px-8">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-200 rounded-full h-[40px] w-[370px] px-4">
          <CiSearch className="text-gray-700 w-[22px] h-[130px]" />
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent placeholder-gray-500 outline-none px-2 flex-grow"
          />
          <Image src="/filter.png" alt="filter" width={22} height={22} className="mr-2" />
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          <FaHeart className="h-5 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
          <div className="relative">
            <IoIosNotifications className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </div>
          <IoMdSettings className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
          <Image src="/Profil.png" alt="profile" width={36} height={36} className="rounded-full" />
        </div>
      </div>

      {/* Mobile: Profile Icon */}
      <div className="flex md:hidden items-center space-x-4">
        <Image src="/Profil.png" alt="profile" width={36} height={36} className="rounded-full" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md border-t-2 border-gray-200 z-10">
          <div className="flex flex-col items-start px-6 py-4 space-y-4">
            {/* Search Bar */}
            <div className="flex items-center border border-gray-200 rounded-full h-[40px] w-full px-4">
              <CiSearch className="text-gray-700 w-[22px] h-[130px]" />
              <input
                type="text"
                placeholder="Search something here"
                className="bg-transparent placeholder-gray-500 outline-none px-2 flex-grow"
              />
            </div>

            {/* Icons */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-2">
                <FaHeart className="h-5 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
                <span className="text-sm text-gray-700">Favorites</span>
              </div>
              <div className="flex items-center space-x-2">
                <IoIosNotifications className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
                <span className="text-sm text-gray-700">Notifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <IoMdSettings className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
                <span className="text-sm text-gray-700">Settings</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

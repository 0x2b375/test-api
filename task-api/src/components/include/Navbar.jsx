// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="fixed w-full top-0 z-40 bg-slate-800 text-white transition-all duration-300">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <FaBars className="text-white mr-4 cursor-pointer" onClick={() => setSidebarToggle(prev => !prev)} />
          <Link
            to="/"
            className="text-lg font-semibold tracking-widest text-white rounded-lg focus:outline-none focus:shadow-outline"
          >
            Дадлага Вэб
          </Link>
          <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${menuOpen ? 'flex' : 'hidden'}`}>
          <Link
            className="px-4 py-2 mt-2 text-sm flex items-center font-semibold text-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
            to="/devices"
          >
            Device
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold flex items-center bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
            to="/about"
          >
            About
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold flex items-center bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
            to="/contact"
          >
            Contact
          </Link>
          <div className="relative" onBlur={closeDropdown}>
            <button
              onClick={toggleDropdown}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
            >
              <span>Profile</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`inline h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                <div className="px-2 py-2 bg-white rounded-md shadow">
                  <Link
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg text-black hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    to="/link1"
                  >
                    Login
                  </Link>
                  <Link
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg text-black hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    to="/link2"
                  >
                    Sign Up
                  </Link>
                  <Link
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg text-black hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    to="/link3"
                  >
                    Log Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

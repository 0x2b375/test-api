/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { TbUserCircle } from 'react-icons/tb';

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className='bg-slate-800 px-4 flex justify-between items-center'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)} />
        <Link to='/' className='text-white font-semibold text-1xl sm:flex py-4'>Дадлага Вэб</Link>
      </div>
      <div className='navbar-center text-white hidden sm:flex'>
        <ul className='flex m-0 p-0 py-4 list-none'>
          <li className="mr-4">
            <Link to='/devices'>Төхөөрөмж</Link>
          </li>
          <li className="mr-4">
            <Link to='/about'>Бидний тухай</Link>
          </li>
          <li className="mr-4">
            <Link to='/contact'>Холбогдох</Link>
          </li>
        </ul>
      </div>
      <div className='relative'>
        <button className='text-white' onClick={handleOpen}>
          <TbUserCircle className='w-[2.5rem] h-6 text-white' />
        </button>
        {open && (
          <div className='z-10 absolute right-0 mt-2 rounded-lg shadow-lg w-32 bg-white border border-gray-300'>
            <ul className='py-2 text-sm text-gray-700'>
              <li className='px-4 py-2 hover:bg-gray-200 transition duration-200'><a href="#">Profile</a></li>
              <li className='px-4 py-2 hover:bg-gray-200 transition duration-200'><a href="#">Settings</a></li>
              <li className='px-4 py-2 hover:bg-gray-200 transition duration-200'><a href="#">Log Out</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

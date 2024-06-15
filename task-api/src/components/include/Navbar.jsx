/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { TbUserCircle } from "react-icons/tb";
const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className='bg-slate-800 px-4  flex justify-between'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)}/>
        <span className='text-white font-semibold text-1xl'>Дадлага Вэб</span>
      </div>
      <div className='navbar-center text-white'>
        <ul className='flex m-0 p-0 py-4 list-none'>
          <li className="mr-4">
            <Link to='/devices'>Төхөөрөмж</Link>
          </li >
          <li className="mr-4">
            <Link to='/about'>Бидний тухай</Link>
          </li>
          <li className="mr-4">
            <Link to='/contact'>Холбогдох</Link>
          </li>
        </ul>
      </div>
      
      <div className='relative'>
        <button className='text-white group' onClick={handleOpen}>
          <TbUserCircle className='w-10 h-6 mt-4 text-white'/>
          <div className='z-1 hidden absolute rounded-lg shadow w-32 group-focus:block bg-white right-0'>
          {open ? (
            <ul className='py-2 text-sm text-gray-950'>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          ) : null}
            
          </div>
        </button>
      </div>

      
    </nav>
  )
}

export default Navbar
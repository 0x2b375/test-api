import React from 'react'
import { FaBars } from "react-icons/fa6";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav className='bg-slate-800 px-4 py-4 flex justify-between ml-64'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer'/>
        <span className='text-white font-semibold text-1xl'>Дадлага Вэб</span>
      </div>
      <div className='navbar-center text-white'>
        <ul className='flex m-0 p-0 list-none'>
          <li className="mr-4">
            <a href='/devices'>Төхөөрөмж</a>
          </li >
          <li className="mr-4">
            <a href='/about'>Бидний тухай</a>
          </li>
          <li className="mr-4">
            <a href='/contact' className="text-white no-underline">Холбогдох</a>
          </li>
        </ul>
      </div>
      
      <div className='relative'>
        <button className='text-white group'>
          <FontAwesomeIcon icon={faUser}  className='w-6 h-6 mt-1 text-white'/>
          <div className='z-10 hidden absolute rounded-lg shadow w-32 group-focus: hidden'>
            <ul>
              <li><a href="">Profile</a></li>
              <li><a href=""></a>Settings</li>
              <li><a href=""></a>Log Out</li>
            </ul>
          </div>
        </button>
      </div>
      
    </nav>
  )
}

export default Navbar
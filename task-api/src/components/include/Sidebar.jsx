/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {PiDevices, PiHouseSimpleLight} from 'react-icons/pi'
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`w-64 bg-slate-800 fixed overflow-auto h-full px-4 py-4 transition-all duration-300 ${sidebarToggle ? '-translate-x-full' : 'translate-x-0'}`}>
      <div className='my-2 mb-3'>
        <h1 className='text-white text-xl font-bold relative bottom-2 py-1'>Sidebar</h1>
      </div>
      <div className=''>
        <ul className='mt-3 text-white font-bold'>
          <li className='mb-2 rounded hober:shadow hover:bg-blue-800 py-2'>
            <Link to='/'>
              <PiHouseSimpleLight className='inline-block w-[1.5rem] h-6 -mt-2 mr-3'></PiHouseSimpleLight>
              Home
            </Link>
              
          </li>
          <li className='mb-2 rounded hober:shadow hover:bg-blue-800 py-2'>
          <Link to='/devices'>
              <PiDevices className='inline-block w-[1.5rem] h-6 -mt-2 mr-3'></PiDevices>
              Devices
          </Link>
          </li>
          <li className='mb-2 rounded hober:shadow hover:bg-blue-800 py-2'>
          <Link to=''>
              <CiSettings className='inline-block w-[1.5rem] h-6 -mt-2 mr-3'></CiSettings>
              Settings
          </Link>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Sidebar
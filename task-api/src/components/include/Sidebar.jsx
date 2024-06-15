/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {PiDevices, PiHouseSimpleLight} from 'react-icons/pi'
import { CiSettings } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className='w-64 bg-slate-800 fixed h-full px-4 py-2'>
      <div className='my-2 mb-4 ml-2'>
        <h1 className='text-white text-xl font-bold'>Sidebar</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hober:shadow hover:bg-blue-800 py-2'>
          <a href='' className='px-3'>
            <PiHouseSimpleLight className='inline-block w-6 h-6 mr-2 -mt-2'></PiHouseSimpleLight>
            Home
          </a>
        </li>
        <li className='mb-2 rounded hober:shadow hover:bg-blue-800 py-2'>
          <a href="" className='px-3'>
            <PiDevices className='inline-block w-6 h-6 mr-2 -mt-2'></PiDevices>
            Devices
          </a>
        </li>
        <li className='mb-2 rounded hober:shadow hover:bg-blue-800 py-2'>
          <a href="" className='px-3'>
            <CiSettings className='inline-block w-6 h-6 mr-2 -mt-2'></CiSettings>
            Settings
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
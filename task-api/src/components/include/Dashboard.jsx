import React from 'react'
import Navbar from './Navbar'
const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? '' : 'ml-64'} transition-all duration-300`}>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
      <h1 className='flex justify-center text-3xl m-5 text-gray-700'>Dashboard</h1>
    </div>
    
    
  )
}

export default Dashboard
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/include/footer';
import Home from "./components/include/Dashboard";
import Devices from "./components/Device";
import Sidebar from "./components/include/Sidebar";
import Navbar from "./components/include/Navbar";
import NotFoundPage from './components/include/NotFoundPage'
const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
 
    <div className='flex flex-col min-h-screen'>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        <div className=''>
          <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/devices'
                element={
                  <Devices
                    sidebarToggle={sidebarToggle}
                  />
                }
              />
              <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
      <Footer sidebarToggle={sidebarToggle}/>
    </div>
      
  );
};

export default App;

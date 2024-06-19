/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/include/footer';
import Home from "./components/include/Dashboard";
import Devices from "./components/Device";
import Sidebar from "./components/include/Sidebar";
import Navbar from "./components/include/Navbar";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className='flex flex-col min-h-screen' style={{backgroundColor: '#201f31'}}>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <div className='flex flex-1'>
        <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        <div className='flex'>
          <Routes>
            <Route
              path='/'
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              element={<Home />}
            />
            <Route
              path='/devices'
              element={
                <Devices
                  sidebarToggle={sidebarToggle}
                  setSidebarToggle={setSidebarToggle}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer sidebarToggle={sidebarToggle} />
    </div>
  );
};

export default App;

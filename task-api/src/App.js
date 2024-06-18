import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/include/Dashboard";
import Devices from "./components/Device";
import Sidebar from "./components/include/Sidebar";
import Navbar from "./components/include/Navbar";
const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className='flex'>
      <div className='flex'>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        <div className='flex-1'>
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
    </div>
  );
};

export default App;

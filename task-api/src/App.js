/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Header from "./components/include/header";
import Footer from "./components/include/footer";
import Sidebar from "./components/include/Sidebar";
import Dashboard from "./components/include/Dashboard";
import Device from './components/Device';
// import Home from "./components/Home"
// import Slidebar from "./components/include/slidebar";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-1'>
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />} />
            <Route path="/devices" element={<Device sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />} />
          </Routes>
        </div>
      </div>
      
    </div>
  );
};

export default App;

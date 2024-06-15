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
  
    <div className='flex'>
      <Routes>
        <Route path="/" element={<Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>}/>
      </Routes>
      <Sidebar sidebarToggle={sidebarToggle}/>
      
    </div>
  
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./components/include/header";
import Footer from "./components/include/footer";
import Index from "./components/Index";
// import Slidebar from "./components/include/slidebar";

const App = () => {
  return (
  
    <div className='main-content'>
      <Header />
      <div className="main-cont">
        <Index />
      </div>
      <Footer />
    </div>
  
  );
};

export default App;

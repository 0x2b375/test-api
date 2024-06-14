import "./App.css";
import React from "react";
import Index from "./components/Index";
import Header from "./components/include/header"
import Footer from "./components/include/footer"
import './App.css';
const App = () => {
  return (
    <div className="flex-container">
      <Header />
      <div className="flex-content">
        <Index />
      </div>
      <Footer />
    </div>
    
  );
};
export default App;

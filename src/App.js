import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home"
// import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import './App.css'

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
        {/* <FeaturedInfo/> */}
      </div>
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainArea from './MainArea';


function App() {
  return (
         

        <div className="app">
          {/* <Login/> */}
          <Navbar/>     
          <Sidebar />
          {/* <MainArea />  */}
   
        </div>
        
   
  
  );
}

export default App;

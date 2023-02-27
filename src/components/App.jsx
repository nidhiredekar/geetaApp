import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainArea from './MainArea';
import Login from './Login';
import SignUp from './SignUp';
import Chapters from './Chapters';
import About from './About';
import ChapterDetails from './ChapterDetails';
import FavShloka from './FavShloka';
import ShlokaState from './context/ShlokaState';
import Contact from './Contact'
import Shlokaoftheday from './Shlokaoftheday'


function App() {
  return (

    <div className="app">

      <ShlokaState>
       < Router>
       <Layout />
     
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/chapters" element={<Chapters/>} />
          <Route exact path="/" element={  <MainArea />} />
          <Route exact path="/login" element={  <Login />} />
          <Route exact path="/register" element={  <SignUp />} />
          <Route exact path="/chapter/:chapter_number" element={<ChapterDetails/>} /> 
          <Route exact path="/favShloka" element={<FavShloka/>} />
          <Route exact path ="/contact" element={<Contact/>}/>Shlokaoftheday
          <Route exact path ="/Shlokaoftheday" element={<Shlokaoftheday/>}/>
        </Routes>
       </Router>
      </ShlokaState>
    </div>

  );
}

export default App;

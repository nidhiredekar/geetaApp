import React from 'react'
import radhakrishna from "./images/radhakrishna-100.png"
import shriradhakrishna from "./images/shriradhakrishna.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,faFacebook,faTwitter,faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  Link ,useNavigate
} from "react-router-dom";


function Sidebar() {
  let navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem('token')
    navigate("/login")
  }

return (

    <div className="sidenav">
      <div className="card">
        <div className="background">
          <picture>
            <img src={shriradhakrishna} alt="Background" className="loading" data-was-processed="true" />
          </picture>
        </div>
        <img src={radhakrishna} alt="Avatar" style={{ width: "20%", marginLeft: "10%", marginTop: "4%" }} />
        {/* <div className="container" style={{ backgroundImage: "shriradhakrishna" }}>

        </div> */}
     <strong>BHAGAVAD GITA</strong>  
      </div>
      <br />
      <hr />
      <br />
      {!localStorage.getItem('token') ?<div> <Link to="/register">Register</Link><Link to="/login">Login</Link> </div>:<div>     <Link to="/">Home</Link>
      <Link to="/FavShloka">Favourite Shloka</Link>
      <Link to="/Shlokaoftheday">Shloka of the day</Link>
      <div style={{ display: "flex" }}>
        <Link to="/chapters">Chapters </Link>
        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderColor: "#f1f1f1" }}>
          <span className="material-symbols-outlined">
            auto_stories
          </span>
        </button>

        <ul className="dropdown-menu" style={{ background: "#f1f1f1" }}>
          <li><Link className="dropdown-item" to="/chapter/1">Chapter 1</Link></li>
          <li><Link className="dropdown-item" to="/chapter/2">Chapter 2</Link></li>
          <li><Link className="dropdown-item" to="/chapter/3">Chapter 3</Link></li>
          <li><Link className="dropdown-item" to="/chapter/4">Chapter 4</Link></li>
          <li><Link className="dropdown-item" to="/chapter/5">Chapter 5</Link></li>
          <li><Link className="dropdown-item" to="/chapter/6">Chapter 6</Link></li>
          <li><Link className="dropdown-item" to="/chapter/7">Chapter 7</Link></li>
          <li><Link className="dropdown-item" to="/chapter/8">Chapter 8</Link></li>
          <li><Link className="dropdown-item" to="/chapter/9">Chapter 9</Link></li>
          <li><Link className="dropdown-item" to="/chapter/10">Chapter 10</Link></li>
          <li><Link className="dropdown-item" to="/chapter/11">Chapter 11</Link></li>
          <li><Link className="dropdown-item" to="/chapter/12">Chapter 12</Link></li>
          <li><Link className="dropdown-item" to="/chapter/13">Chapter 13</Link></li>
          <li><Link className="dropdown-item" to="/chapter/14">Chapter 14</Link></li>
          <li><Link className="dropdown-item" to="/chapter/15">Chapter 15</Link></li>
          <li><Link className="dropdown-item" to="/chapter/16">Chapter 16</Link></li>
          <li><Link className="dropdown-item" to="/chapter/17">Chapter 17</Link></li>
          <li><Link className="dropdown-item" to="/chapter/18">Chapter 18</Link></li>
        </ul>

      </div>  <button onClick={handleLogout} style={{background:"none" , border:"none" ,width:"280px" ,textAlign:"left" ,marginLeft:"0"}}><Link to="/Logout">logout</Link></button></div>}
      <br />
      <hr />
  
      {/* <Link to="/shloka">Shloka of the Day</Link>

  <Link to="/shloka">Favourite Shloka</Link> */}

      <br />
      <Link to="/about">About</Link>


      <hr />
      <br />
      <Link to="/contact">Contact Us</Link>
      <br />
      <div id="social" style={{ flexDirection: "row" }} >
        <a href="https://www.youtube.com/c/jamesqquick"
          className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/learnbuildteach/"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>



  )
}

export default Sidebar;
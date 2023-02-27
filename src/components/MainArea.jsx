import React ,{useState,useEffect} from 'react'
import sribhagavadgita from "./images/sribhagavadgita.jpg"
import bhagavadgita from "./images/gita/bhagavadgita-6.jpg"
import {
  Link
} from "react-router-dom";
import "./App.css"
import kanhadhun from "./audio/kanhadhun.mp3"
function MainArea(){
     const [, setMuted] = useState(true)
   function handleclick() {
        const player = new Audio(kanhadhun);
        const playPromise = player.play();
        if (playPromise !== undefined) 
            return playPromise.then(() => setMuted(false)).catch(() => setMuted(false));
      }
return(
    <div className="main">
        <img src={sribhagavadgita} alt="img" style={{width: "1239px",height: "700px",objectFit: "fill" }}/> 
        <div id="frontpage">
        <p >BHAGAVAD GITA, “The Song of the Lord” <br/>
        <Link to="/chapters" className="custom-btn btn-14" style={{ marginLeft: "20rem"}} type='button' onClick={handleclick}>Explore</Link>
          </p>
         
        </div>
       
    </div>
)

}

export default MainArea;
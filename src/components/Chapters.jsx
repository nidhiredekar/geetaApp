import React,{useState, useEffect} from 'react'
import Chapter from './Chapter';
import bhagavadgita from "./images/gita/bhagavadgita-6.jpg"

function Chapters(){

const [allchapters ,setChapter] = useState([]);
const fetchData = ()=>{
    return fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?rapidapi-key=ee08db9e9cmsh461487edb2ee3fep1edde0jsn983cfe38d1f0#")
    .then((response)=> response.json()).then((data)=> setChapter(data));
}

useEffect(()=>{
    fetchData();
},[])

   return(
        <div id="about-card" >
            
          <img src="https://e1.pxfuel.com/desktop-wallpaper/86/360/desktop-wallpaper-pol-lord-krishna-and-arjuna.jpg" className="card-img-top" alt="..." style={{marginLeft: "1.5cm",width: "1000px",height: "600px",objectFit: "fill" }}/>
         
            <div className='container my-3' style={{marginLeft:"1cm" ,marginTop: "3cm"}}>
            <p className="custom-btn btn-sm btn-14" style={{textAlign:"center",fontSize: "25px" ,width: "1000px"}}>  Chapters in bhagwat geeta</p>
           <div className='row'>
            {allchapters.map((ch)=>{
             return  <div className='col-md-4' key={ch.id}>
               <Chapter  name={ch.name} name_meaning={ch.name_meaning} verses_count={ch.verses_count} chapter_number={ch.chapter_number} />
               </div>
            })}
           

           </div>
            </div>
            </div>
            
          
   )
}

export default Chapters;
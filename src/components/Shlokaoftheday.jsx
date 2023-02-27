import React from 'react'
import {useState, useEffect } from 'react'
import ChapterDetailHeader from "./ChapterDetailHeader"
import kanha from "./images/gita/bhagavadgita-5.jpg"
function Shlokaoftheday(){

        const [allverses ,setVerse] = useState([]);
        const chapter_number = Math.floor(Math.random() * 18) + 1;
        const verse_number = Math.floor(Math.random() * 20) + 1;
        const fetchData = async ()=>{
            const apiendpoint = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"
            const url = apiendpoint+ chapter_number +"/verses/?rapidapi-key=ee08db9e9cmsh461487edb2ee3fep1edde0jsn983cfe38d1f0#"
            return await  fetch(url)
            .then((response)=> response.json()).then((data)=> setVerse(data));
        }

        useEffect(()=>{
            fetchData();
        },[])

       return(
                <div>       
                        <div id="about-card" style={{height: "3000%" ,marginLeft:"7.7cm" ,marginTop: "0%" ,width :"80.1191%"}} > 
                        <p className="custom-btn btn-sm btn-14" style={{marginLeft: "1.5cm",marginTop: "6%",textAlign:"center",fontSize: "25px" ,width: "1000px"}}>SHLOKA OF THE DAY </p>
                        <div style={{display:"flex" , gap: "20px"}}>
                        <img src={kanha} style={{marginTop: "1%" ,marginLeft: "1.5cm",width: "800px",height: "600px",objectFit: "fill" }}/>
                          {allverses.map((ch)=>{
                            if(ch.verse_number === verse_number)
                          return  <div className='col-md-4' key={ch.id}  >
                             <ChapterDetailHeader  name={ch.text} name_meaning={ch.translations[6].description } chapter_number={ch.chapter_number} id={ch.id} /> 
                            </div>
                          })} 
                    </div>
                  </div>
                </div>
                         
          )
}

export default Shlokaoftheday
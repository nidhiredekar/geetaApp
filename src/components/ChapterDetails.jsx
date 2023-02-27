import React from 'react'
import {useState, useEffect } from 'react'
import ChapterDetailHeader from "./ChapterDetailHeader"
import Chap from './Chap';
import {
    BrowserRouter as Router,
    useParams,
  } from "react-router-dom";

  //hhhhhhhhhhh
  
function ChapterDetails(){

    const { chapter_number  } = useParams();
    
        const [allverses ,setVerse] = useState([]);

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
                    <Chap chapter_number={chapter_number}/>
                        <div id="about-card" style={{height: "3000%" ,marginLeft:"7.7cm" ,marginTop: "35%" ,width :"80.1191%"}} > 
                          <div className='container my-2' >
                        <div className='row'>
                          {allverses.map((ch)=>{
                          return  <div className='col-md-4' key={ch.id}>
                             <ChapterDetailHeader  name={ch.text} name_meaning={ch.translations[6].description } chapter_number={ch.chapter_number} id={ch.id} /> 
                            </div>
                          })}
                </div>
                  </div>
                  </div>
                </div>
                         
          )
}

export default ChapterDetails
import React,{useState, useEffect} from 'react'
import {
    Link, redirect
  }  from "react-router-dom";

function Chap(props){

const [chapter,setChapter] = useState([]);
 const fetchData = async (chapter_number)=>{
    
        const apiendpoint = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"
        const url = apiendpoint+ chapter_number +"/?rapidapi-key=ee08db9e9cmsh461487edb2ee3fep1edde0jsn983cfe38d1f0#"
        return await fetch(url)
        .then((response)=> response.json()).then((data)=> setChapter(data));
  
}

useEffect(()=>{
    fetchData(props.chapter_number);
 
},[])


 
// function handleBackClick(chapter_number){
//     setChapter(chapter_number - 1);
// }

// function handleNextClick(chapter_number){
//     setChapter(chapter_number + 1)
// }
   return(
   


    
        <div>
           
           <div className="card card-body" id="headercard" style={{height: "300%", marginLeft:"7.8cm"  }} > 
         <div style={{textAlign : "center" , marginTop: "2cm"}}>
            <h2>Chapter: {chapter.chapter_number}  - {chapter.name} </h2>
           
            <h4>{chapter.name_meaning}</h4>
                <br/>
                <p style={{marginLeft:"2%" , marginRight:"2%"}}>{chapter.chapter_summary}</p>
                <div style={{display:"flex"}}>
                <Link to={`/chapters`} className="custom-btn btn-sm btn-14" style={{fontSize: "15px",marginLeft:"2%",width:" 210px"}}>All Chapters</Link>
                    {/* {
                        (chapter.chapter_number == 1) ?  <Link to={`/chapters`} className="custom-btn btn-sm btn-14" style={{fontSize: "15px",marginLeft:"2%",width:" 210px"}}>All Chapters</Link>
                            :  <Link to={`/chapter/${chapter.chapter_number - 1}`}  className="custom-btn btn-sm btn-14" style={{fontSize: "15px",marginLeft:"2%",width:" 210px"}}>Back</Link>
            
                    }
                    {
                        (chapter.chapter_number == 18) ?   <Link to={`/chapters`} className="custom-btn btn-sm btn-14" style={{fontSize: "15px",marginLeft:"55%",width:" 210px"}}>All Chapters</Link>
                        : <Link to={`/chapter/${chapter.chapter_number - 1}`} className="custom-btn btn-sm btn-14" style={{fontSize: "15px",marginLeft:"55%",width:" 210px"}}>Next</Link>
                      
                    } */}
                
                </div>
         </div>
         
          </div>
          </div>
            
            
          
   )
}

export default Chap;
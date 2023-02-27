import React,{ useEffect} from 'react'
import { useContext } from 'react';
import ShlokaContext from './context/shlokaContext';
import { useNavigate } from "react-router-dom";


const FavShloka = ()=> {
const context = useContext(ShlokaContext)   
const {shlokas ,deleteShloka,getShlokas} = context;

let navigate = useNavigate()

useEffect(()=>{
    if(localStorage.getItem('token')){
        getShlokas();
    }else{
        navigate("/login")
    }
 
},[])

const handleClick = (id)=>{
deleteShloka(id);
}
   return(
   
        <div>
           
        <div id="about-card" style={{height: "3000%" ,marginLeft:"7.7cm"  ,width :"80.1191%"}} >  
          <div className='container my-2' >
        
          {shlokas.length===0 &&   <div className='card' style={{width: "15rem" ,marginLeft:"35%"}} > <h5 className='card-title'><strong>NO FAVOURITE SHLOKAS ARE THERE</strong></h5></div>}
         <div className='row'>
           
          {shlokas.map((ch)=>{
           return  <div className='col-md-4' key={ch._id}>
                 <div className='my-3'>
                    <div className='card' style={{width: "15rem"}} >
                        <div className='card-body' key={ch._id}>
                        <button type='button' style={{border:"none" ,background:"none", display: "flex" ,width:"10px" }} onClick={() => handleClick(ch._id)} >
                        <span className="material-symbols-outlined">bookmark_remove</span> </button>
                            <h5 className='card-title'><strong>{ch.text}</strong></h5>
                            <p className='card-text'>{ch.translation} </p>
                            
                        </div>
                    </div>
                </div>
           
             </div>
          })}
         

         </div>
          </div>
          </div>
        </div>
            
            
          
   )
}

export default FavShloka;

import React from 'react'
import { useState ,useContext } from 'react';
import shlokaContext from './context/shlokaContext';




function ChapterDetailHeader(props){
 
    const context = useContext(shlokaContext)   
    const { addShloka } = context;
    const [state,setState]= useState(false);
    // const [shloka, setShloka] = useState({
    //     id: "",
    //     text: "",
    //     translation: ""
    // });

    const  handleClick =(e)=>{

        e.preventDefault();

    if(state === true){
        setState(false)
        // deleteShloka(props.id )
       
    }else{
        setState(true)
        addShloka(props.id , props.name , props.name_meaning) 
    }
        
        
       
    }
          

   return(
    <div className='my-3'>
       
    <div className='card' style={{width: "15rem"}}>
    <button type='submit' style={{border:"none" ,background:"none", display: "flex" ,width:"10px" }} onClick={handleClick} key={props.id}>
    { (state) ? <span className="material-symbols-outlined">bookmark_add</span> :<span className="material-symbols-outlined"> + </span>  }
        </button>  
        <div className='card-body'>
            <h5 className='card-title' id="name" ><strong>{props.name} </strong></h5>
            <p className='card-text' id="meaning" >{props.name_meaning} </p>
            
        </div>
    </div>
</div>
            
          
   )
}

export default ChapterDetailHeader;


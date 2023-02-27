import React from "react";
import { useState } from "react";
import ShlokaContext from "./shlokaContext";


const ShlokaState =(props) =>{
    const host = "http://localhost:8000";
const shlokainitial = []
const [shlokas , setShlokas ]= useState(shlokainitial);
  
//fetch all fav shlokas
const getShlokas = async ()=>{
    const response = await fetch(`${host}/api/shloka/fetchallshlokas`, {
        method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
          
      });
      const json = await response.json(); 
      setShlokas(json)
}

//add a shloka to fav
const addShloka = async (shloka_id,text,translation)=>{
    const response = await fetch(`${host}/api/shloka/addshlokas`, {
        method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
            body: JSON.stringify({shloka_id,text,translation}) 
      });
      const json = await response.json(); 
    setShlokas(shlokas.concat(json))
    
}



//unfav the sholka
const deleteShloka = async (id)=>{
    const response = await fetch(`${host}/api/shloka/deleteshloka/${id}`, {
        method: 'DELETE',
          headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
          
      });
      const json = await response.json();
    
    const newShloka = shlokas.filter((shloka)=>{return shloka._id !== id})
    setShlokas(newShloka)  
}


return (

    <ShlokaContext.Provider value={{shlokas ,addShloka ,deleteShloka ,setShlokas ,getShlokas}}>
        {props.children}
    </ShlokaContext.Provider>
)
}

export default ShlokaState

// Example POST method implementation:

   
  
  
 
  
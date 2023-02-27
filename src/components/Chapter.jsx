import React,{useState} from 'react'

import {
    Link
  } from "react-router-dom";

function Chapter(props){

   return(

            <div className='my-3'>
                <div className='card' style={{width: "15rem"}}>
                    <img src={props.url} className='card-img-top' />
                    <div className='card-body'>
                        <h5 className='card-title'><strong> {props.chapter_number}. {props.name}</strong></h5>
                        <p className='card-text'>{props.name_meaning} </p>
                        <p style={{fontSize: "15px"}}>Shlokas: {props.verses_count} </p>
                        <Link to={`/chapter/${props.chapter_number}`} className="custom-btn btn-sm btn-14" style={{fontSize: "15px"}}>Read More</Link>
                      
                    </div>
                </div>
            </div>
          
   )
}

export default Chapter; 
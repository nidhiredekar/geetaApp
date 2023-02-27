import React from 'react'
import "./login.css"

import { useNavigate ,Link} from "react-router-dom";
import { useState } from 'react';


function Login (){
const [credentials,setCredentials] = useState({email:"",password:""})
let navigate = useNavigate()


const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch(`http://localhost:8000/api/auth/login`, {
    method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'auth-token':    localStorage.getItem('token')
    },
    body: JSON.stringify({email: credentials.email,password: credentials.password}) 
  });
  const json = await response.json()
  

  if(json.success){
    localStorage.setItem('token',json.authToken)
    navigate("/")
    alert("Devotee you are logged in ")
  }else{
    alert("Invalid credentials")
  }
}

const onChange=(e)=>{
  setCredentials({...credentials,[e.target.name]: e.target.value})
}
return (
    <div className="login-box">
     
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div className="user-box">
      <input type="text" id="email" name="email" value={credentials.email} onChange={onChange} required=""/>
      <label>Email Address </label>
    </div>
    <div className="user-box">
      <input type="password" id="password"  name="password" value={credentials.password} onChange={onChange} required=""/>
      <label>Password </label>
    </div>
    <button type='submit' style={{background:"none" , border:"none"}}>
   
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    
      Login
    </button>
   
  </form>

</div>
)
}

export default Login;
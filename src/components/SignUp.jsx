import React,{useState} from 'react'
import "./login.css"
import {
    useNavigate
} from "react-router-dom";


function SignUp (){
    const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    let navigate = useNavigate()
   const { name,email,password} = credentials;

    const handleSubmit = async (e) => {
      e.preventDefault();
   
      const response = await fetch(`http://localhost:8000/api/auth/createuser`, {
        method: 'POST',
          headers: {
          'Content-Type': 'application/json',
       },
        body: JSON.stringify( {name,email,password}) 
      });
      const json = await response.json()
      if(json.success) {
      console.log(json);
        localStorage.setItem('token',json.authToken)
        navigate("/")
      }else{
        alert("Try registering again");
      }
    }
    
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]: e.target.value})
    }

return (
    <div className="login-box">
     
  <h2>SignUp</h2>
  <form onSubmit={handleSubmit}>
    <div className="user-box">
      <input type="text"  id="name" name="name"autoComplete='off' value={credentials.name}  onChange={onChange} minLength={3} required=""/>
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="email"  id="email" name="email" autoComplete='off' value={credentials.email}  onChange={onChange}  required=""/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" id="password"  name="password" autoComplete='off' value={credentials.password}  onChange={onChange} minLength={5} required=""/>
      <label>Password</label>
    </div>
    <div className="user-box">
      <input type="password" id="cpassword"  name="cpassword" value={credentials.cpassword}  onChange={onChange} minLength={5} required=""/>
      <label>Confirm Password</label>
    </div>
    <button type='submit' style={{background:"none" , border:"none"}}>
    <span></span>
      <span></span>
      <span></span>
      <span></span>
      SignUp
    </button>
      
  
  </form>

</div>
)
}

export default SignUp;
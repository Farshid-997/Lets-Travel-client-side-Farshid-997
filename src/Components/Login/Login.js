import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import {useLocation,useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Header/Header';

import './Login.css';
const Login = () => {
  
    const location=useLocation();
    const history=useHistory()
   // const  redirect_uri=location.state?.from || '/home'
    const [loginData,setLoginData]=useState({})
    const {user,loginUser,isLoading,authError}=useAuth()
 
const handleOnChange=(e)=>{
    const field=e.target.name;
    const  value=e.target.value;
    const newloginData={...loginData}
    newloginData[field]=value
    console.log(newloginData)
    setLoginData(newloginData)
}
const handleLoginSubmit=(e)=>{
   
  
    loginUser(loginData.email,loginData.password,location,history)
    e.preventDefault()
}

    return (
        <div className="login-form">
            <Header></Header>
          <h2>Please Login Here!!</h2>  

  {
  <form  onSubmit={handleLoginSubmit}> 
    

  
  <input type="email" onChange={handleOnChange} id="email" name="email" placeholder=" Enter Your Email.."/>


  <input type="password" onChange={handleOnChange} id="password" name="password" placeholder="Enter Your Password..."/>

  <input type="submit" value="Login"/></form>
  }     
  
 
 
 <div>
 {isLoading && <Spinner/>}
{user?.email&& <Alert variant="success" style={{width:'20%',marginLeft:'750px'}}>User Created Successfully!</Alert>}
{authError && <Alert style={{width:'20%',marginLeft:'750px'}} variant='danger'>{authError}</Alert>}
     
     </div>  
 
   <NavLink style={{textDecoration:'none',color:'white'}} to="/register">New User?Register..</NavLink>
        </div>
    );
};

export default Login;
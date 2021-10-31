import React from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Login.css';
const Login = () => {
    const { signInUsingGoogle }=useAuth();
    return (
        <div className="login-form">
          <h2>Please Login Here!!</h2>  

        <form > 
    

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder=" Enter Your Email.."/>

    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter Your Password..."></input>
  
    <input type="submit" value="Submit"/></form> <br />
 
    <h4> Or Sign In With Google:</h4>
   <button onClick={signInUsingGoogle} className="btn btn-success mb-5 p-2" >Google Sign In</button> <br />
   <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;
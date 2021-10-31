import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

import useAuth from '../../Hooks/useAuth';
const Register = () => {
    const handleReg = (e) => {
        e.preventDefault()
    }
    const { signInUsingGoogle }=useAuth();
    return (
        <div className="register">
               <h2>Please Register Here!!</h2>  


             <form onSubmit={handleReg}>
             <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>


    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder=" Enter Your Email.."/>

    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter Your Password..."></input>

    <label for="lname">Address</label>
    <input type="address" id="address" name="address" placeholder="Your Address.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>


  
    <input type="submit" value="Submit"/>

             </form> <br />
             <h4> Or Sign Up With Google:</h4>
             <button onClick={signInUsingGoogle} className="btn btn-success mb-5 p-2" >Google Sign Up</button> <br />
             <Link to="/login">Already Registered?</Link>

</div>
    );
};

export default Register;
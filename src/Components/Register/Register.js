import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Register.css";
import toast, { Toaster } from "react-hot-toast";

import useAuth from "../../Hooks/useAuth";
// import { Alert, Spinner } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const handleReg = (e) => {
    e.preventDefault();
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  const { registerUser, signInUsingGoogle } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[field] = value;
    console.log(newloginData);
    setLoginData(newloginData);
  };
  const confirmUser = () => {
    toast.success("user created successfully");
  };
  return (
    <>
      <div className="register">
        <Header></Header>
        <h2>Please Register Here!!</h2>
        {
          <form onSubmit={handleReg}>
            <input
              type="text"
              id="fname"
              onChange={handleOnChange}
              name="firstname"
              placeholder="Your first name.."
            />

            <input
              type="text"
              id="lname"
              onChange={handleOnChange}
              name="lastname"
              placeholder="Your last name.."
            />

            <input
              type="email"
              id="email"
              onChange={handleOnChange}
              name="email"
              placeholder=" Enter Your Email.."
            />

            <input
              type="password"
              id="password"
              onChange={handleOnChange}
              name="password"
              placeholder="Enter Your Password..."
            ></input>

            <input type="submit" value="Register" onClick={confirmUser} />
          </form>
        }
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <button
          onClick={signInUsingGoogle}
          style={{ width: "40%" }}
          className="btn btn-success mb-5 p-2"
        >
          Google Sign Up
        </button>{" "}
        <br />
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/login">
          Already Registered?
        </NavLink>
      </div>
    </>
  );
};

export default Register;

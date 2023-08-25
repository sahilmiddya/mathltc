// import React from 'react'
// import Button from './Button'
// import { AiFillFacebook } from "react-icons/ai";
// import { AiOutlineGoogle } from "react-icons/ai";

import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { loginuser } from "../store/loginslice";
// import { loginuser } from "./store/loginslice";
// import New from './New';
import { registerUserAsync } from "../store/authActions";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // };

  const dispatch = useDispatch();
  const nav = useNavigate();
 
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Update the value in the userData state
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    // Validate and update errors
    let newErrors = { ...errors };
  
    if (name === "email") {
      newErrors.email = validateEmail(value)
        ? ""
        : "Please enter a valid email address.";
    } else if (name === "password") {
      newErrors.password = validatePassword(value)
        ? ""
        : "Password should be at least 6 characters long.";
    } else {
      newErrors[name] = "";
    }
  
    setErrors(newErrors);
  };
  

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  const handleRegister = () => {
    if (
      userData.name.trim() === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(registerUserAsync(userData));
    nav("/otp");
  };

  return (
    <div className="loginx">
      <div className="cont">
        <div className="body">
          <h2>Sign up</h2>
          <div className="left">Username</div>
<input
  name="name"
  type="text"
  placeholder="enter username..."
  value={userData.name}
  onChange={handleInputChange}
/>
{errors.name && <div className="error-message">{errors.name}</div>}

<div className="left">Email</div>
<input
  name="email"
  type="text"
  placeholder="enter email..."
  value={userData.email}
  onChange={handleInputChange}
/>
{errors.email && <div className="error-message">{errors.email}</div>}

<div className="left"> Password</div>
<input
  name="password"
  type="password"
  placeholder="enter password..."
  value={userData.password}
  onChange={handleInputChange}
/>
{errors.password && <div className="error-message">{errors.password}</div>}

          {/* <div className="right">Forget password</div> */}
          <button className="login" onClick={handleRegister}>
            Register
          </button>

          <hr />
          <button
            className="signup"
            onClick={() => {
              nav("/login");
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

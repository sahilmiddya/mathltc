// import React from 'react'
// import Button from './Button'
// import { AiFillFacebook } from "react-icons/ai";
// import { AiOutlineGoogle } from "react-icons/ai";

import "./signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { loginuser } from "../store/loginslice";
// import { loginuser } from "./store/loginslice";
// import New from './New';
import { registerUserAsync } from "../store/authActions";

const Signup = () => {
  // const [email, setemail] = useState("");
  // const [pw, setpw] = useState("");
  // const [name, setname] = useState("");

  // const dispatch = useDispatch();
  // const handsub = (e) => {
  //   e.preventDefault();
  //   let usercreds = {
  //     email,
  //     pw,
  //     name
  //   };
  //   dispatch(loginuser(usercreds));
  // };

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    dispatch(registerUserAsync(userData));
  };

  return (
    <>
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
          <div className="left">Email</div>
          <input
            name="email"
            type="text"
            placeholder="enter email..."
            value={userData.email}
            onChange={handleInputChange}
          />
          <div className="left"> Password</div>
          <input
            name="password"
            type="password"
            placeholder="enter password..."
            value={userData.password}
            onChange={handleInputChange}
          />

          {/* <div className="right">Forget password</div> */}
          <button className="login" onClick={handleRegister}>
            Register
          </button>

          <hr />
          <button className="signup">Log in</button>
        </div>
      </div>
    </>
  );
};

export default Signup;

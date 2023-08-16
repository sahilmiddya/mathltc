// import React from 'react'
// import Button from './Button'
// import { AiFillFacebook } from "react-icons/ai";
// import { AiOutlineGoogle } from "react-icons/ai";

import "./signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "./store/loginslice";
// import New from './New';
const Signup = () => {
  const [email, setemail] = useState("");
  const [pw, setpw] = useState("");
  const [name, setname] = useState("");

  const dispatch = useDispatch();
  const handsub = (e) => {
    e.preventDefault();
    let usercreds = {
      email,
      pw,
      name
    };
    dispatch(loginuser(usercreds));
  };

  return (
    <>
      <div className="cont">
        <form className="body" onSubmit={handsub}>
          <h2>Sign up</h2>
          <div className="left">Username</div>
          <input
            type="text"
            placeholder="enter username..."
            onChange={(w) => setname(w.target.value)}
          />
          <div className="left">Email</div>
          <input
            type="text"
            placeholder="enter email..."
            onChange={(w) => setemail(w.target.value)}
          />
          <div className="left"> Password</div>
          <input
            type="password"
            placeholder="enter password..."
            onChange={(x) => setpw(x.target.value)}
          />

          {/* <div className="right">Forget password</div> */}
          <button className="login">
            <Link to="/new">Sign up</Link>
          </button>

          <hr />
          <button className="signup">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Signup;

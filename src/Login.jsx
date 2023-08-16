// import React from 'react'
// import Button from './Button'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";

import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "./store/loginslice";
// import New from './New';
const Login = () => {
  const [email, setemail] = useState("");
  const [pw, setpw] = useState("");

  const dispatch= useDispatch()
  const handsub = (e) => {
    e.preventDefault();
    let usercreds = {
      email,
      pw,
    };
    dispatch(loginuser(usercreds))
  };

  return (
    <>
      <div className="cont">
        <form className="body" onSubmit={handsub}>
          <h2>Login</h2>
          <div className="left">Username or Email</div>
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

          <div className="right">Forget password</div>
          <button className="login">
            <Link to="/new">Login</Link>
          </button>
          <div className="left">Or login with...</div>
          <div className="btns">
            <button className="fb">
              <span className="fbsvg">
                {" "}
                <AiFillFacebook />
              </span>
              Facebook
            </button>
            <button className="gg">
              <span className="ggsvg">
                <AiOutlineGoogle />
              </span>
              Google
            </button>
          </div>
          <hr />
          <button className="signup">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Login;

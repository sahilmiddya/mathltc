// import React from 'react'
// import Button from './Button'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { loginUserAsync } from "../store/authActions";

import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loginuser } from "../store/loginslice";
// import New from './New';
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navig = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    if (credentials.username.trim() === "" || credentials.password === "") {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(loginUserAsync(credentials));
    navig("/otp");
  };

  return (
    <div className="loginx">
      <div className="cont">
        {/* <form onSubmit={formsub} className="body"> */}
        <div className="body">
          <h2>Login</h2>
          <div className="left">Username or Email</div>
          <input
            type="text"
            placeholder="enter email..."
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <div className="left"> Password</div>
          <input
            type="password"
            placeholder="enter password..."
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />

          <div className="right">Forget password</div>
          <button onClick={handleLogin} className="login">
            Login
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
        </div>
      </div>
    </div>
  );
};

export default Login;
// const [email, setemail] = useState("");
// const [pw, setpw] = useState("");

// const dispatch= useDispatch()
// const handsub = (e) => {
//   e.preventDefault();
//   let usercreds = {
//     email,
//     pw,
//   };
//   dispatch(loginuser(usercreds))
// };

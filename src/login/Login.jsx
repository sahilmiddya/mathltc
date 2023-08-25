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

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const validatePassword = (password) => {
    // Add your password validation rules here
    return password.length >= 6; // For example, requiring a minimum of 6 characters
  };
  const dispatch = useDispatch();
  // const navig = useNavigate();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const auth = useSelector((state) => state.auth);

  console.log({ auth });

  const handleLogin = () => {
    let newErrors = { ...errors };

    // if (!validateEmail(credentials.username)) {
    //   newErrors.username = "Please enter a valid email address.";
    // } else {
    //   newErrors.username = "";
    // }

    if (!validatePassword(credentials.password)) {
      newErrors.password = "Password should be at least 6 characters long.";
    } else {
      newErrors.password = "";
    }

    if (newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    dispatch(loginUserAsync(credentials));
    // navig("/home");

    console.log({ handleLogin: auth });
    if (auth?.user?.token) {
      console.log("This user has token");
    }
  };

  return (
    <div className="loginx">
      <div className="cont">
        {/* <form onSubmit={formsub} className="body"> */}
        <div className="body">
          <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Login</h2>
          {/* // Inside your Login component */}
          <div className="inps">
            <div className="left">Username or Email</div>
            <input
              type="text"
              className="inp2"
              placeholder="enter email..."
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />

            <div className="left"> Password</div>
            <input
              type="password"
              className="inp2"
              placeholder="enter password..."
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <div className="right">Forget password</div>
          <button onClick={handleLogin} className="login">
            Login
          </button>
          <div className="left">Or login with...</div>
          <div className="btns">
            <button className="fb">
              <span className="fbsvg">
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
          <Link to="/">
            <button className="signup">Sign up</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;

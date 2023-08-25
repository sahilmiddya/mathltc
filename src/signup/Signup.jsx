import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { loginuser } from "../store/loginslice";
import { registerUserAsync } from "../store/authActions";
import { setEmail } from "../store/authSlice";
import { toast } from "react-toastify";

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
    if (userData.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Username is required.",
      }));
      return;
    }

    if (userData.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
      return;
    }

    if (userData.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required.",
      }));
      return;
    }

    if (errors.email || errors.name || errors.password) {
      return;
    }

    dispatch(
      registerUserAsync(
        {
          email: userData.email,
          username: userData.name,
          forgot_password: "",
        },
        {
          err: (msg) => {
            toast.error(msg?.detail);
          },
          success: (msg) => {
            dispatch(setEmail(userData.email)); // Store the email in Redux
            nav("/otp");
          },
        }
      )
    );
  };

  return (
    <div className="parent">
      <div className="loginx">
        <div className="cont">
          <div className="body">
            <h2
              style={{ marginTop: 0, marginBottom: "1rem", fontSize: "1.5rem" }}
            >
              Sign up
            </h2>
            <div className="left">Username</div>
            <input
              name="name"
              className="inp2"
              type="text"
              placeholder="enter username..."
              value={userData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}

            <div className="left">Email</div>
            <input
              className="inp2"
              name="email"
              type="text"
              placeholder="enter email..."
              value={userData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

            <div className="left">Password</div>
            <input
              className="inp2"
              name="password"
              type="password"
              placeholder="enter password..."
              value={userData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}

            <div
              style={{
                marginTop: 10,
              }}
            >
              {/* <div className="right">Forget password</div> */}
              <button className="login" onClick={handleRegister}>
                Register
              </button>

              <hr style={{ margin: "8px 0" }} />
              <button
                style={{
                  marginTop: 0,
                }}
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
      </div>
    </div>
  );
};

export default Signup;

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import {
  loginUserAsync,
  newpwAsync,
  sendotpAsync,
  verifyotpAsync,
} from "../store/authActions";

import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import Otp from "../otp/Otp";
import { setOtp } from "../store/otpSlice";
import { activateAccAsync } from "../store/ProfileActions";
// import ReactivateAccount from "./ReactivateAccount";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [reactivateModalopen, setreactivatemodalopen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const validatePassword = (password) => {
    return password.length >= 4; // For example, requiring a minimum of 6 characters
  };
  const dispatch = useDispatch();
  // const navig = useNavigate();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const auth = useSelector((state) => state.auth);

  console.log({ auth });
  const openReactivate = () => {
    setreactivatemodalopen(true);
  };
  const closeReactivate = () => {
    setreactivatemodalopen(false);
  };

  const handleLogin = () => {
    // openReactivate();

    let newErrors = { ...errors };

    if (!validatePassword(credentials.password)) {
      newErrors.password = "Password should be at least 6 characters long.";
    } else {
      newErrors.password = "";
    }

    if (newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    dispatch(
      loginUserAsync(
        credentials,
        () => {},
        (err) => {
          toast.error(err);
          console.log(err);
          if (err.detail === "Inactive account.") {
            openReactivate();
            console.log("inv cred");
          }
        }
      )
    );
  };

  const activate_account = () => {
    console.log("fhdtjtryi6tre4tz");
    dispatch(
      activateAccAsync(
        {
          username: credentials.username,
        },
        (succ) => {
          closeReactivate();
          toast.success(succ.detail);
          dispatch( //forrr going to homepage
            loginUserAsync(
              credentials,
              () => {},
              (err) => {
                toast.error(err); 
                
              }
            )
          );
        },
        (err) => {
          toast.error(err.detail);
        }
      )
    );
  };

  return (
    <>
      {/* <ReactivateAccount
        reactivateModalopen={reactivateModalopen}
        closeReactivate={closeReactivate}
      /> */}

      <div className="parent2">
        <div className="loginx">
          <div className="cont">
            <div className="body">
              <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Login</h2>
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
              <div className="right" onClick={openModal}>
                Forget password
              </div>
              {modalOpen && <PasswordResetModal onClose={closeModal} />}
              <button onClick={handleLogin} className="login">
                Login
              </button>
              {reactivateModalopen && (
                <ReactivateModal
                  onClose={closeReactivate}
                  onActivate={activate_account}
                />
              )}
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
      </div>
    </>
  );
};

export default Login;

// import React, { useState } from "react";

function PasswordResetModal({ onClose }) {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSix = useRef(null);

  const inputs = [
    { id: 1, ref: refOne, name: "one" },
    { id: 2, ref: refTwo, name: "two" },
    { id: 3, ref: refThree, name: "three" },
    { id: 4, ref: refFour, name: "four" },
    { id: 5, ref: refFive, name: "five" },
    { id: 6, ref: refSix, name: "six" },
  ];

  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const otp = useSelector((state) => state.otp.otp);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailSubmit = () => {
    if (isValidEmail) {
      dispatch(
        sendotpAsync(
          {
            email,
            username: "",
            forgot_password: "true",
          },
          (msg) => {
            toast.success(msg.detail);
            //if api calll is succcess oonlt then this steo willl be executed
            setStep(step + 1);
          },
          (msg) => {
            console.log(msg);
            toast.error(msg.detail);
          }
        )
      );
    }
  };

  const handleStep2 = () => {
    // setStep(step + 1);
    dispatch(
      verifyotpAsync(
        {
          email,
          otp: otp.join(""),
        },
        (msg) => {
          toast.success(msg.detail);
          //if api calll is succcess oonlt then this steo willl be executed
          setStep(step + 1);
        },
        (msg) => {
          console.log(msg);
          toast.error(msg.detail);
        }
      )
    );
  };

  // const handlePasswordSubmit = () => {
  //   console.log("Password changed successfully");
  //   onClose();
  // };
  const handleInputChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    dispatch(setOtp(newOtp));

    switch (name) {
      case "one": {
        if (value !== "") {
          refTwo.current.focus();
        }
        return;
      }
      case "two": {
        if (value === "") {
          refOne.current.focus();
        } else {
          refThree.current.focus();
        }
        return;
      }
      case "three": {
        if (value === "") {
          refTwo.current.focus();
        } else {
          refFour.current.focus();
        }
        return;
      }
      case "four": {
        if (value === "") {
          refThree.current.focus();
        } else {
          refFive.current.focus();
        }
        return;
      }
      case "five": {
        if (value === "") {
          refFour.current.focus();
        } else {
          refSix.current.focus();
        }
        return;
      }
      case "six": {
        if (value === "") {
          refFive.current.focus();
        } else {
          refSix.current.blur();
        }
        return;
      }

      default:
        return;
    }
  };

  const handlePasswordChange = () => {
    if (newPassword === "" || confirmPassword === "") {
      // Display an error message for empty fields
      toast.error("Please fill in both password fields.");
    } else if (newPassword === confirmPassword) {
      // Passwords match, proceed with API call
      setPasswordsMatch(true);

      dispatch(
        newpwAsync(
          {
            email,
            new_password: newPassword,
            confirm_password: confirmPassword,
          },
          (msg) => {
            toast.success(msg.detail);
            onClose(); // Close the password reset modal
          },
          (msg) => {
            console.log(msg);
            toast.error(msg.detail);
          }
        )
      );
    } else {
      // Passwords do not match
      setPasswordsMatch(false);
      toast.error("Passwords do not match. Please enter matching passwords.");
    }
  };

  // const renderStepOne = () => (
  //   <div className="step1">
  //     <h2>Forgot Password</h2>
  //     <p>Enter your email to reset your password.</p>
  //     <input
  //       type="email"
  //       className="inpmod"
  //       placeholder="Enter your email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <button className="btnmod" onClick={handleEmailSubmit}>
  //       Next
  //     </button>
  //   </div>
  // );

  const validateEmail = (email) => {
    // Regular expression pattern for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const renderStepOne = () => (
    <div className="step1">
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password.</p>
      <input
        type="email"
        className={`inpmod ${!isValidEmail ? "invalid" : ""}`}
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setIsValidEmail(validateEmail(e.target.value));
        }}
      />
      {!isValidEmail && (
        <p className="error-message">Please enter a valid email address.</p>
      )}
      <button className="btnmod" onClick={handleEmailSubmit}>
        Next
      </button>
    </div>
  );

  const renderStepTwo = () => (
    <div className="step1">
      <h3 className="h3">Verification</h3>
      <div className="otplogin">
        {inputs.map((item, index) => (
          <input
            key={item.id}
            name={item.name}
            ref={item.ref}
            type="text"
            maxLength="1"
            className="otp-box-login"
            value={otp[index]}
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
      </div>
      <button className="btnmod" onClick={handleStep2}>
        Next
      </button>
    </div>
  );

  const renderStepThree = () => (
    <div className="step1">
      <h2>Reset Password</h2>
      <p>Enter your new password and confirm it.</p>
      <input
        type="password"
        className="inpmod"
        placeholder="New password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        className="inpmod"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {!passwordsMatch && (
        <p className="error-message">Passwords do not match</p>
      )}
      <button className="btnmod" onClick={handlePasswordChange}>
        Next
      </button>
    </div>
  );

  return (
    <div className="modal">
      <div className="modal-content">
        {step === 1 && renderStepOne()}
        {step === 2 && renderStepTwo()}
        {step === 3 && renderStepThree()}
      </div>
    </div>
  );
}

// function PasswordResetModal({ onClose }) {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleEmailSubmit = () => {
//     setStep(step + 1);
//   };

//   const handlePasswordSubmit = () => {
//     console.log("Password changed successfully");
//     onClose();
//   };

//   const renderStepOne = () => (
//     <div className="step1">
//       <h2>Forgot Password</h2>
//       <p>Enter your email to reset your password.</p>
//       <input
//         type="email"
//         className="inpmod"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button className="btnmod" onClick={handleEmailSubmit}>Next</button>
//     </div>
//   );

//   const renderStepTwo = () => (
//     <div className="step1">
//       <h2>Reset Password</h2>
//       <p>Enter your new password and confirm it.</p>
//       <input
//         type="password"
//         className="inpmod"
//         placeholder="New password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         className="inpmod"
//         placeholder="Confirm password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       <button className="btnmod"  onClick={handleEmailSubmit}> Password</button>
//     </div>
//   );
//   const renderStepThree = () => (
//     <div className="step1">
//       <h2>hello</h2>
//       <p>Enter your new password and confirm it.</p>
//       <input
//         type="password"
//         className="inpmod"
//         placeholder="New password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         className="inpmod"
//         placeholder="Confirm password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       <button className="btnmod"  onClick={handlePasswordSubmit}>Reset Password</button>
//     </div>
//   );

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         {step === 1 && renderStepOne()}
//         {step === 2 && renderStepTwo()}
//         {step === 3 && renderStepThree()}
//       </div>
//     </div>
//   );
// }

const ReactivateModal = ({ onClose, onActivate }) => (
  <div>
    <div className="modal-overlayreactivate">
      <div className="modalreactivate">
        <h1 className="h1login">ARE YOU SURE ??</h1>
        <button className="modal-buttonreactivate" onClick={onClose}>
          Close
        </button>
        <button className="modal-buttonreactivate2" onClick={onActivate}>
          Activate
        </button>
      </div>
    </div>
  </div>
);

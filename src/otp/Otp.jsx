import "./otp.css";
import { useDispatch, useSelector } from "react-redux";
import { setOtp, setVerificationStatus } from "../store/otpSlice"; // Provide the correct path
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Otp = () => {
  // console.log('gbvfds');

  const userEmail = useSelector((state) => state.regnflow);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const otp = useSelector((state) => state.otp.otp);
  const verificationStatus = useSelector(
    (state) => state.otp.verificationStatus
  );

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

  const backbtn = () => {
    nav(-1);
  };
  const send = async () => {
    nav("/avtr");
    console.log("nhtgrfedwsa");

    let isEmptyField = false;
    for (let i = 0; i < otp.length; i++) {
      if (otp[i] === "") {
        isEmptyField = true;

        break;
      }
    }

    if (isEmptyField) {
      alert("fvdc");
      console.log("gbfvdcsxz");
      // dispatch(setVerificationStatus("Please fill in all OTP fields"));
      // return;
    }
    try {
      const response = await axios.post(
        "http://13.40.14.168/accounts/verify-otp-email",
        {
          // otp: otp.join(""),
        }
      ); // Replace with your API endpoint
      const { success } = response.data;

      if (success) {
        dispatch(setVerificationStatus("OTP verified successfully"));
      } else {
        dispatch(setVerificationStatus("OTP verification failed"));
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="body2">
      <div className="otpcont">
        <h3>
          A verification code has been sent to
          {/* celebritycat2050@gmail.com */}: {" " + userEmail.email}
        </h3>
        <div className="otp-container">
          <div className="otp-input">
            {/* {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                // type="number"
                ref={inpRefs[index]}
                type="text"
                maxLength="1"
                className="otp-box"
                value={otp[index]}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))} */}

            {inputs.map((item, index) => (
              <input
                key={item.id}
                // type="number"
                name={item.name}
                ref={item.ref}
                type="text"
                maxLength="1"
                className="otp-box"
                value={otp[index]}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
        </div>
        <h3 className="h3">Didnt receive a code?</h3>
        <h3>Resend</h3>
        <hr className="hr" />
        <div className="btn2">
          <button className="buttn" onClick={backbtn}>
            Back
          </button>
          <button className="buttn" onClick={send}>
            Send
          </button>{" "}
          <p className="verification-status">{verificationStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default Otp;

{
  /* <div class="otp-input">
          <input type="text" maxlength="1" class="otp-box" />
          <input type="text" maxlength="1" class="otp-box" />
          <input type="text" maxlength="1" class="otp-box" />
          <input type="text" maxlength="1" class="otp-box" />
          <input type="text" maxlength="1" class="otp-box" />
          <input type="text" maxlength="1" class="otp-box" />
        </div> */
}

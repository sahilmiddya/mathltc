import React from "react";

import "./otp.css";
import { useDispatch, useSelector } from "react-redux";
import { setOtp, setVerificationStatus } from "../store/otpSlice"; // Provide the correct path
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  // console.log('gbvfds');

  const dispatch = useDispatch();
  const nav = useNavigate()
  const otp = useSelector((state) => state.otp.otp);
  const verificationStatus = useSelector(
    (state) => state.otp.verificationStatus
  );

  const handleInputChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    dispatch(setOtp(newOtp));
  };

  const backbtn= ()=>{
    nav(-1)
  }
  const send = async () => {
    nav('/avtr')
    console.log('nhtgrfedwsa');

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
        <h3>A verification code has been sent to celebritycat2050@gmail.com</h3>
        <div className="otp-container">
          <div className="otp-input">
            {Array.from({ length: 6 }).map((_, index) => (
             
             <input
                key={index}
                // type="number"
                type="text"
                maxLength="1"
                className="otp-box"
                value={otp[index]}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
        </div>
        <h3 className="h3">Didn't receive a code?</h3>
        <h3>Resend</h3>
        <hr className="hr" />
        <div className="btn2">
          <button className="buttn" onClick={backbtn}>Back</button>
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

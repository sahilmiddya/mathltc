// // App.js
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setOtp, setVerificationStatus } from "../store/otpSlice"; // Provide the correct path
// import axios from "axios";
// import "./otp.css";

// function App() {
//   const dispatch = useDispatch();
//   const otp = useSelector((state) => state.otp.otp);
//   const verificationStatus = useSelector(
//     (state) => state.otp.verificationStatus
//   );

//   const handleInputChange = (e, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = e.target.value;
//     dispatch(setOtp(newOtp));
//   };

//   const handleVerifyClick = async () => {
//     try {
//       const response = await axios.post("/api/verify-otp", {
//         otp: otp.join(""),
//       }); // Replace with your API endpoint
//       const { success } = response.data;

//       if (success) {
//         dispatch(setVerificationStatus("OTP verified successfully"));
//       } else {
//         dispatch(setVerificationStatus("OTP verification failed"));
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="otp-container">
//         <h2>Enter OTP</h2>
//         <div className="otp-input">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <input
//               key={index}
//               type="number"
//               maxLength="1"
//               className="otp-box"
//               value={otp[index]}
//               onChange={(e) => handleInputChange(e, index)}
//             />
//           ))}
//         </div>
//         <button className="verify-button" onClick={handleVerifyClick}>
//           Verify OTP
//         </button>
//         <p className="verification-status">{verificationStatus}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

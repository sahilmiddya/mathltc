import axios from "axios";
import { loginUser, logoutUser } from "./authSlice";
import { baseURL } from "../constants/baseURL";
// import { loginUserAsync } from "./authActions";

// Simulate API call for user registration
export const registerUserAsync =
  (userData, { err, success }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/send-otp-email/`,
        userData
      );

      if (response.status === 200 || response.status === 201) {
        success && success(response.data);
      }
    } catch (error) {
      err && err(error?.response?.data);
    }
  };

export const loginUserAsync = (credentials) => async (dispatch) => {
  console.log(credentials);
  try {
    const response = await axios.post(
      `${baseURL}/accounts/login/`,
      credentials
    );
    if (response.status === 200) {
      const user = response.data;
      dispatch(loginUser(user)); // Update Redux state with the logged-in user
    } else {
      // Handle login failure
    }
  } catch (error) {
    // Handle API call error
  }
};

// Logout action
export const logoutUserAction = () => (dispatch) => {
  dispatch(logoutUser()); // Update Redux state to log out the user
};

export const sendotpAsync =
  (bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/send-otp-email/`,
        bodydata
      );
      callsuccess(response.data);
    } catch (error) {
      callerror(error.response.data);
      // Handle API call error
    }
  };


  export const verifyotpAsync =
  (bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/verify-otp-email/`,
        bodydata //coming from backend api sheet
      );
      callsuccess(response.data);
    } catch (error) {
      callerror(error.response.data);
      // Handle API call error
    }
  };
  // /accounts//


  export const newpwAsync =
  (bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/forgot-password/`,
        bodydata //coming from backend api sheet
      );
      callsuccess(response.data);
    } catch (error) {
      callerror(error.response.data);
      // Handle API call error
    }
  };





  export const  RegisterAsync =
  (bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/register/`,
        bodydata //coming from backend api sheet
      );
      callsuccess(response.data);
      dispatch(loginUser(response.data)); 
    } catch (error) {
      callerror(error.response.data);
      // Handle API call error
    }
  };







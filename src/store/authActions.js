import axios from "axios";
import { loginUser, logoutUser } from "./authSlice";
// import { loginUserAsync } from "./authActions";

// Simulate API call for user registration
export const registerUserAsync =
  (userData, { err, success }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "http://13.40.14.168/accounts/send-otp-email/",
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
      "http://13.40.14.168/accounts/login/",
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

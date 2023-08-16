import axios from "axios";
import { loginUser, logoutUser } from "./authSlice";
// import { loginUserAsync } from "./authActions";

// Simulate API call for user registration
export const registerUserAsync = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://13.40.14.168/accounts/send-otp-email",
      userData
    );

    if (response.status === 201) {
      // Handle successful registration
      // For example, you might display a success message to the user
      console.log("Registration successful!");
      // Dispatch an action if needed
      // dispatch(someAction());
    } else {
      // Handle registration failure
      // For example, you might display an error message to the user
      console.error("Registration failed.");
      // You can also check the response data for more details about the failure
      if (response.data && response.data.error) {
        console.error("Error details:", response.data.error);
      }
    }
  } catch (error) {
    // Handle API call error
    // You can access error details through the "error" object
    console.error("API call error:", error);
    // Handle different types of errors if needed
    if (error.response) {
      // Server responded with a non-2xx status code
      console.error("Server responded with:", error.response.status);
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      // No response received, the request might have failed
      console.error("Request failed:", error.request);
    } else {
      // Other error occurred
      console.error("Error details:", error.message);
    }
  }
};

// Simulate API call for user login
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

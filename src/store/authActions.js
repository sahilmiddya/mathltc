import axios from "axios";
import { loginUser, logoutUser } from "./authSlice";
// import { loginUserAsync } from "./authActions";

// Simulate API call for user registration
export const registerUserAsync = (userData,err, success) => async ( ) => {
  try {
    const response = await axios.post(
      "http://13.40.14.168/accounts/send-otp-email",
      userData
    );

    if (response.status === 201) { 
      console.log("Registration successful!"); 
      success(response.data)
    } else { 
      console.error("Registration failed."); 
      if (response.data && response.data.error) {
        console.error("Error details:", response.data.error);
      }
    }
  } catch (error) { 
    console.error("API call error:", error); 
    err(err.response.data)
    if (error.response) { 
      console.error("Server responded with:", error.response.status);
      console.error("Response data:", error.response.data);

    } else if (error.request) { 
      console.error("Request failed:", error.request);
    } else { 
      console.error("Error details:", error.message);
    }
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

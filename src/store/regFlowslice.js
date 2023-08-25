// otpSlice.js
import { createSlice } from "@reduxjs/toolkit";

const regnSlice = createSlice({
  name: "Registration flow",
  initialState: { 
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    background: null,
    background_solid_color: "",
    has_background: false,
    hear_about_us: "",
    avatar: "",
    fcm_token: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setOtp, setVerificationStatus, setEmail } = regnSlice.actions;

export default regnSlice.reducer;

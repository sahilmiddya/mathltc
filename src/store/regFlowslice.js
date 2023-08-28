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
    avatarURL: "",
    fcm_token: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setstate: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setOtp, setVerificationStatus, setEmail, setstate } =
  regnSlice.actions;

export default regnSlice.reducer;

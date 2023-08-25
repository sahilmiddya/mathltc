// otpSlice.js
import { createSlice } from "@reduxjs/toolkit";

const regnSlice = createSlice({
  name: "Registration flow",
  initialState: {
    userEmail: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const { setOtp, setVerificationStatus, setEmail } = regnSlice.actions;

export default regnSlice.reducer;

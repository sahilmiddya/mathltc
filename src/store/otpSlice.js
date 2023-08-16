// otpSlice.js
import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    otp: '',
    verificationStatus: '',
  },
  reducers: {
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    setVerificationStatus: (state, action) => {
      state.verificationStatus = action.payload;
    },
  },
});

export const { setOtp, setVerificationStatus } = otpSlice.actions;

export default otpSlice.reducer;

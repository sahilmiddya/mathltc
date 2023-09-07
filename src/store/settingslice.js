import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: { user: null, settingModalOpen: false, settingData: null },
  reducers: {
    userprofile: (state, action) => {
      state.user = action.payload;
    },
    setsettingModalOpen: (state) => {
      state.settingModalOpen = !state.settingModalOpen;
    },
    updatesettingsdata:(state,action)=>{
      state.settingData=action.payload
    }
  },
});

export const { userprofile, setsettingModalOpen ,updatesettingsdata} = settingSlice.actions;

export default settingSlice.reducer;

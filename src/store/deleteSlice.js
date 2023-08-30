// avatarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
};

const deleteSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    deleteAcc:(state,action) =>{
        state
    }
  
  },
});

export const {  deleteAcc} = deleteSlice.actions;

export default deleteSlice.reducer;

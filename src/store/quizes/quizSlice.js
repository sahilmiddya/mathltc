import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTypes: null,
  quizFormat: null,
  quizQuestions: null,
  quizLevel:null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,

  reducers: {
   
    quizTypes: (state, action) => {
      state.quizTypes = action.payload;
    },
     quizFormat: (state, action) => {
      state.quizFormat = action.payload;
    },
    quizLevel:(state, action) =>{
      state.quizLevel = action.payload
    }
  },
});

export const { quizTypes ,quizLevel,quizFormat} = quizSlice.actions;

export default quizSlice.reducer;

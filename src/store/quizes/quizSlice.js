import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTypes: null,
  quizFormat: null,
  quizQuestions: null,
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
  },
});

export const { quizTypes ,quizFormat} = quizSlice.actions;

export default quizSlice.reducer;

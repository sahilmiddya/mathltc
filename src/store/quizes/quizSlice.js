import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTypes: null,
  quizFormat: null,
  quizQuestions: null,
  quizLevel: null,
  selectedQuizType: null,
  selectQuizLevel: null,
  count: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,

  reducers: {
    quizTypes: (state, action) => {
      state.quizTypes = action.payload;
    },
    selectQuizType: (state, action) => {
      // console.log({ action });
      state.selectedQuizType = action.payload;
    },
    selectQuizLevel: (state, action) => {
      console.log({ action });
      state.selectQuizLevel = action.payload;
    },

    quizFormat: (state, action) => {
      state.quizFormat = action.payload;
    },
    quizLevel: (state, action) => {
      console.log({ action, state });
      state.quizLevel = action.payload;
    },
    quizQuestions: (state, actions) => {
      console.log(actions);
      state.quizQuestions = actions.payload;
    },
    setcount: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const {
  quizTypes,
  quizLevel,
  quizFormat,
  selectQuizType,
  selectQuizLevel,
  quizQuestions,
  setcount,
} = quizSlice.actions;

export default quizSlice.reducer;

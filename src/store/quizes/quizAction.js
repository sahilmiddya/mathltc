import axios from "axios";
import { baseURL } from "../../constants/baseURL";

import { quizTypes, quizFormat, quizLevel, quizQuestions } from "./quizSlice";

export const getQuizTypesAsync = (authToken) => async (dispatch) => {
  try {
    const { data, status } = await axios.get(`${baseURL}/quiz/type`, {
      headers: { Authorization: `JWT ${authToken}` },
    });

    if (status === 200) {
      dispatch(quizTypes(data));
    }
  } catch (error) {
    // hgf
  }
};

export const getQuizFormatAsync = (authToken, type) => async (dispatch) => {
  // console.log("madhu");
  try {
    const { data, status } = await axios.get(
      `${baseURL}/quiz/formats/${type}`,
      {
        headers: { Authorization: `JWT ${authToken}` },
      }
    );

    if (status === 200) {
      dispatch(quizFormat(data));
    }
  } catch (error) {
    // hgf
  }
};

export const getQuizLevelAsync = (authToken, type, id) => async (dispatch) => {
  // console.log("madhu");
  try {
    const { data, status } = await axios.get(
      `${baseURL}/quiz/levels/${type}?quiz_format=${id}`,
      {
        headers: { Authorization: `JWT ${authToken}` },
      }
    );

    if (status === 200) {
      dispatch(quizLevel(data));
    }
  } catch (error) {
    // jhgh
  }
};
// quiz/generate-questions/quiz_type?quiz_format=integer&quiz_level=level-1

export const getQuestionsAsync =
  (authToken, qtype, quizformat, quizlevel, callback) => async (dispatch) => {
    console.log("madhu");
    try {
      const { data, status } = await axios.get(
        `${baseURL}/quiz/generate-questions/${qtype}?quiz_format=${quizformat}&quiz_level=${quizlevel}`,
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );

      if (status === 200) {
        callback && callback();
        dispatch(quizQuestions(data));
      }
    } catch (error) {
      // jhgh
    }
  };
// ====================================================================================================
// export const getQuestionsAsync = (authToken, qtype, quizformat, quizlevel) => async (dispatch, getState) => {
//   const state = getState().quiz;
//   console.log(state);
//   const shouldRefetch = state.quizQuestions.length >= 25;

//   try {
//     const { data, status } = await axios.get(
//       `${baseURL}/quiz/generate-questions/${qtype}?quiz_format=${quizformat}&quiz_level=${quizlevel}`,
//       {
//         headers: { Authorization: `JWT ${authToken}` },
//       }
//     );

//     if (status === 200) {
//       const mergedQuestions = shouldRefetch ? data : [...state.quizQuestions, ...data];
//       dispatch(quizQuestions(mergedQuestions));
//     }
//   } catch (error) {
//     // Handle error
//   }
// };

// ======================================================================================================

export const getUsersAnsAsync =
  (authToken, qtype, quizformat, quizlevel) => async (dispatch) => {
    // console.log("helo");
    try {
      const { data, status } = await axios.get(
        `${baseURL}/quiz/generate-questions/${qtype}?quiz_format=${quizformat}&quiz_level=${quizlevel}`,
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );

      if (status === 200) {
        dispatch(quizQuestions(data));
      }
    } catch (error) {
      // jhgh
    }
  };

export const updateUserstatsAsync =
  (authToken, username, body, callb) => async (dispatch) => {
    console.log("updateUserstatsAsync1234");
    try {
      const { status, data } = await axios.post(
        `${baseURL}/quiz/game/user-statistics/${username}`,
        body,
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );

      if (status === 200) {
        callb(data);
      }
    } catch (error) {
      // jhgh
    }
  };

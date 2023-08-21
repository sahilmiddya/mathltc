import axios from "axios";
import { baseURL } from "../../constants/baseURL";

import { quizTypes } from "./quizSlice";

export const getQuizTypesAsync = (authToken) => async (dispatch) => {
  try {
    const { data, status } = await axios.get(`${baseURL}/quiz/type`, {
      headers: { Authorization: `JWT ${authToken}` },
    });

    if (status === 200) {
      dispatch(quizTypes(data));
    }
  } catch (error) {}
};

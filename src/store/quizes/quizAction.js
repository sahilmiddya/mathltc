import axios from "axios";
import { baseURL } from "../../constants/baseURL";

import { quizTypes,quizFormat } from "./quizSlice";

export const getQuizTypesAsync = (authToken) => async (dispatch) => {

  console.log("ksdjhbvjkhbjhkb");
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
 
export const getQuizFormatAsync = (authToken,type) => async (dispatch) => {

  console.log("madhu");
  try {
    const { data, status } = await axios.get(`${baseURL}/quiz/formats/${type}`, {
      headers: { Authorization: `JWT ${authToken}` },
    });

    if (status === 200) {
      dispatch(quizFormat(data));
    }
  } catch (error) {
    // hgf 
  }
};

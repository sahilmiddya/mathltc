import axios from "axios";
import { baseURL } from "../constants/baseURL";

export const feedbackAsync =
  (authtoken, bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(`${baseURL}/quiz/feedback/`, bodydata, {
        headers: { Authorization: `JWT ${authtoken}` },
      });
      callsuccess(response.data);
    } catch (error) {
      callerror(error?.response?.data);
      // Handle API call error
    }
  };

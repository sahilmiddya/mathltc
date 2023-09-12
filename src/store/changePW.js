import axios from "axios";
import { baseURL } from "../constants/baseURL";

export const changePWasync =
  (authtoken, bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/change-password/`,
        bodydata,
        {
          headers: { Authorization: `JWT ${authtoken}` },
        }
      );
      callsuccess(response.data);
    } catch (error) {
      callerror(error?.response?.data);
      // Handle API call error
    }
  };
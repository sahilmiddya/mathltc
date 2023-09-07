import axios from "axios";
import { baseURL } from "../constants/baseURL";
import { updatesettingsdata } from "./settingslice";

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

export const settingAsync =
  (authtoken,username, bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${baseURL}/accounts/global-settings/update?username=${username}`,
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



export const getsettingAsync =  //to get the stored settings data when modal opens again
(authtoken,username, callsuccess, callerror) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseURL}/accounts/global-settings?username=${username}`,
      
      {
        headers: { Authorization: `JWT ${authtoken}` },
      }
    );

    dispatch(updatesettingsdata(response.data))
    callsuccess(response.data);
  } catch (error) {
    callerror(error?.response?.data);
    // Handle API call error
  }
};

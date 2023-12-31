import { baseURL } from "../constants/baseURL";
import axios from "axios";
import { userprofile } from "./ProfileSlice";
import { globalsetting } from "./globalsettingSlice";

export const profiledetailsasync =
  (authToken, username, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${baseURL}/accounts/detail/${username}`,
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );
      dispatch(userprofile(response.data));
      callsuccess(response.data);
    } catch (error) {
      callerror(error?.response?.data);
      // Handle API call error
    }
  };

export const globalsettingasync =
  (authToken, username, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${baseURL}/accounts/global-settings?username=${username}`,
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );
      dispatch(globalsetting(response.data));
      callsuccess(response.data);
    } catch (error) {
      callerror(error?.response?.data);
      // Handle API call error
    }
  };

export const updateProfilePicasync = //dispatched in avatar in wardrobe

    (authToken, username, bodydata, callsuccess, callerror) =>
    async (dispatch) => {
      try {
        const response = await axios.put(
          `${baseURL}/accounts/update/${username}`,
          bodydata,
          {
            headers: { Authorization: `JWT ${authToken}` },
          }
        );

        callsuccess(response.data);
        // dispatch(globalsetting(response.data));
      } catch (error) {
        callerror(error?.response?.data);
        // Handle API call error
      }
    };

export const deleteAccAsync =
  (authToken, bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/delete-account/`,
        bodydata,
        {
          headers: { Authorization: `JWT ${authToken}` },
        }
      );
      callsuccess(response.data);
    } catch (error) {
      callerror(error?.response?.data);
      // Handle API call error
    }
  };

export const activateAccAsync =
  (bodydata, callsuccess, callerror) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${baseURL}/accounts/reactivate-account/`,
        bodydata
      );
      callsuccess(response.data);
    } catch (error) {
      callerror(error?.response?.data);
      // Handle API call error
    }
  };

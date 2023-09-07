import axios from "axios";
import { baseURL } from "../constants/baseURL";
import { set_leaderboard_data } from "./leader_slice";

export const leader_Async =  //to get the stored settings data when modal opens again
(authtoken, callsuccess, callerror) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseURL}/quiz/game/leaderboard/`,
      
      {
        headers: { Authorization: `JWT ${authtoken}` },
      }
    );

    dispatch(set_leaderboard_data(response.data))
    callsuccess(response.data);
  } catch (error) {
    callerror(error?.response?.data);
    // Handle API call error
  }
};

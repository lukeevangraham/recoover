import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchRecentPfdReset = (id) => async (dispatch) => {
  const response = await axios.get(`/checkIns/${id}`);

  dispatch({
    type: actionTypes.FETCH_RECENT_PFD_RESET,
    payload: response.data,
  });
};

import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchRecentPfdReset = (id) => async (dispatch) => {
  const response = await axios.get(`/checkIns/${id}`);

  dispatch({
    type: actionTypes.FETCH_RECENT_PFD_RESET,
    payload: response.data,
  });
};

export const addPfdReset = (checkInData) => async (dispatch) => {
  console.log("DATA: ", checkInData);
  const response = await axios.post(`/checkIns`, checkInData);

  dispatch({
    type: actionTypes.ADD_PFD_RESET,
    payload: response.data,
  });
};

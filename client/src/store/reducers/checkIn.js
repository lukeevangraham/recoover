import * as actionTypes from "../actions/actionTypes";

const initialState = {
  pfdResetDate: "",
};

const checkInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PFD_RESET:
      // console.log(`payload: ${action.payload}`);
      return {
        ...state,
      };
    case actionTypes.FETCH_RECENT_PFD_RESET:
      // console.log(`payload: ${JSON.stringify(action.payload[0].date)}`);
      return {
        ...state,
        pfdResetDate: action.payload[0].date,
      };

    default:
      return state;
  }
};

export default checkInReducer;

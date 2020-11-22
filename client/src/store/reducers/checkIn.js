import * as actionTypes from "../actions/actionTypes";

const initialState = {
  pfdResetDate: "",
};

const checkInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PFD_RESET:
      console.log(`LOOK HERE: ${state.pfdResetDate}`);
      const newDate = new Date(action.payload.date);
      const prevDate = new Date(state.pfdResetDate);
      if (newDate > prevDate) {
        return {
          ...state,
          pfdResetDate: newDate,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.FETCH_RECENT_PFD_RESET:
      return {
        ...state,
        pfdResetDate: action.payload[0].date,
      };

    default:
      return state;
  }
};

export default checkInReducer;

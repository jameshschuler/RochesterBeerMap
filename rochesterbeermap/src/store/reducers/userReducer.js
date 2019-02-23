import { GET_USER_POSITION } from "../types";

const initialState = {
  userPosition: {
    lat: null,
    lng: null
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_POSITION:
      return {
        ...state,
        userPosition: action.userPosition
      };
    default:
      return state;
  }
};

export default userReducer;

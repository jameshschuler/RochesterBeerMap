import {
  BEGIN_FETCH_BREWERIES,
  FETCH_BREWERIES_SUCCESS,
  FETCH_BREWERIES_FAILURE
} from "../types";

const initialState = {
  breweries: []
};

const breweryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_FETCH_BREWERIES:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_BREWERIES_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        breweries: action.breweries
      };
    case FETCH_BREWERIES_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    default:
      return state;
  }
};

export default breweryReducer;

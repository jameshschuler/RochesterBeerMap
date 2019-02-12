import {
  BEGIN_FETCH_BREWERIES,
  FETCH_BREWERIES_SUCCESS,
  FETCH_BREWERIES_FAILURE,
  FILTER_BREWERIES,
  BEGIN_ADD_BREWERY,
  ADD_BREWERY_SUCCESS,
  ADD_BREWERY_FAILURE
} from "../types";

const initialState = {
  breweries: [],
  filteredBreweries: []
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
        breweries: action.breweries,
        filteredBreweries: action.breweries
      };
    case FETCH_BREWERIES_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    case BEGIN_ADD_BREWERY:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ADD_BREWERY_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        response: action.response
      };
    case ADD_BREWERY_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    case FILTER_BREWERIES:
      return {
        ...state,
        filteredBreweries: action.filteredBreweries
      };
    default:
      return state;
  }
};

export default breweryReducer;

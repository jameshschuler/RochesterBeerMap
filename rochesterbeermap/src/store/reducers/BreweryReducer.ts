import { ActionType } from "../../types/Context";

export const initialState = {
  isLoading: false,
  isError: false,
  breweries: [],
  filteredBreweries: []
};

export const breweryReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        breweries: action.payload,
        filteredBreweries: action.payload
      };
    case ActionType.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error
      };
    case ActionType.FILTER_BREWERIES:
      return {
        ...state,
        filteredBreweries: action.payload
      };
    default:
      return state;
  }
};

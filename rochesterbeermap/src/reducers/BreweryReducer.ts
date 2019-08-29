export const initialState = {
  isLoading: false,
  isError: false,
  breweries: [],
  filteredBreweries: []
};

export const breweryReducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        breweries: action.payload,
        filteredBreweries: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error
      };
    case "FILTER_BREWERIES":
      return {
        ...state,
        filteredBreweries: action.payload
      };
    default:
      return state;
  }
};

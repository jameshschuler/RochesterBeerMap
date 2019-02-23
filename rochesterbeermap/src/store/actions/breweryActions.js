import { db } from "../../config/firebaseConfig";
import {
  ADD_BREWERY_FAILURE,
  ADD_BREWERY_SUCCESS,
  BEGIN_ADD_BREWERY,
  BEGIN_FETCH_BREWERIES,
  FETCH_BREWERIES_FAILURE,
  FETCH_BREWERIES_SUCCESS,
  FILTER_BREWERIES
} from "../types";

const beginFetchBreweries = isFetching => ({
  type: BEGIN_FETCH_BREWERIES,
  isFetching
});

const fetchBreweriesSuccess = (isFetching, breweries) => ({
  type: FETCH_BREWERIES_SUCCESS,
  isFetching,
  breweries
});

const fetchBreweriesFailure = (isFetching, error) => ({
  type: FETCH_BREWERIES_FAILURE,
  isFetching,
  error
});

const beginAddBrewery = isFetching => ({
  type: BEGIN_ADD_BREWERY,
  isFetching
});

const addBrewerySuccess = (isFetching, response) => ({
  type: ADD_BREWERY_SUCCESS,
  isFetching,
  response
});

const addBreweryFailure = (isFetching, error) => ({
  type: ADD_BREWERY_FAILURE,
  isFetching,
  error
});

const filterBreweriesAction = filteredBreweries => ({
  type: FILTER_BREWERIES,
  filteredBreweries
});

export const getBreweries = () => async (dispatch, getState) => {
  dispatch(beginFetchBreweries(true));
  try {
    let breweries = [];
    const response = await db.collection("Breweries").get();

    // TODO: send request to get distance for each brewery if there's
    //https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY

    response.forEach(function(doc) {
      breweries.push({ id: doc.id, ...doc.data() });
    });

    dispatch(fetchBreweriesSuccess(false, breweries));
  } catch (err) {
    const error = {
      message:
        "Something went wrong while trying to retrieve the brewery map. Please try again!"
    };
    dispatch(fetchBreweriesFailure(false, error));
  }
};

export const addBrewerySuggestion = brewery => async (dispatch, getState) => {
  dispatch(beginAddBrewery(true));

  try {
    await db.collection("SuggestedBreweries").add(brewery);

    dispatch(
      addBrewerySuccess(false, {
        message: "Thanks for your suggestion!",
        success: true
      })
    );
  } catch (err) {
    const error = {
      message:
        "Something went wrong while trying to save your suggestion. Please try again!",
      success: false
    };
    dispatch(addBreweryFailure(false, error));
  }
};

export const filterBreweries = query => (dispatch, getState) => {
  let {
    brewery: { breweries }
  } = getState();

  query = query.toLowerCase();
  let filtered =
    query === ""
      ? breweries
      : breweries.filter(
          brewery =>
            brewery.name.toLowerCase().includes(query) ||
            brewery.city.toLowerCase().includes(query)
        );

  dispatch(filterBreweriesAction(filtered));
};

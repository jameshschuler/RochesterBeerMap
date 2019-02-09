import { db } from "../../config/firebaseConfig";
import {
  BEGIN_FETCH_BREWERIES,
  FETCH_BREWERIES_SUCCESS,
  FETCH_BREWERIES_FAILURE
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

export const getBreweries = () => async (dispatch, getState) => {
  dispatch(beginFetchBreweries(true));

  try {
    const response = await db.collection("Breweries").get();
    let breweries = [];
    response.forEach(function(doc) {
      breweries.push({ id: doc.id, ...doc.data() });
    });

    dispatch(fetchBreweriesSuccess(false, breweries));
  } catch (err) {
    console.log({ err });
    dispatch(fetchBreweriesFailure(false, err));
  }
};

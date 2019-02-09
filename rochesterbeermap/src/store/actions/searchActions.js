import {
  BEGIN_SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_FAILURE
} from "../types";

const beginSearchRequest = isFetching => ({
  type: BEGIN_SEARCH_REQUEST,
  isFetching
});

const searchRequestSuccess = (isFetching, response) => ({
  type: SEARCH_REQUEST_SUCCESS,
  isFetching,
  response
});

const searchRequestFailure = (isFetching, response) => ({
  type: SEARCH_REQUEST_FAILURE,
  isFetching,
  response
});

// TODO: clear search action

export const searchBreweries = query => (dispatch, getState) => {
  dispatch(beginSearchRequest(true));


db.collection("Breweries").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  });
});
};

import { GET_USER_POSITION } from "../types";

const getUserPositionAction = userPosition => ({
  type: GET_USER_POSITION,
  userPosition
});

export const getUserPosition = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        position => {
          // for when getting location is a success

          dispatch(
            getUserPositionAction({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          );
          resolve();
        },
        () => resolve()
      );
    } else {
      resolve();
    }
  });
};

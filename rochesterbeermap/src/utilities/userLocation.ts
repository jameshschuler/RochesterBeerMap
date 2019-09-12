/**
 * Checks if the user has enabled geolocation in their browser
 */
export const getUserLocation = () => {
  const promise = new Promise(function(resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          reject("Geolocation disabled. " + error);
        }
      );
    } else {
      reject("Geolocation unavailable.");
    }
  });

  return promise;
};

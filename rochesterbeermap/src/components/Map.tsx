import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const Map: React.FC = () => {
  const [centerPosition, setCenterPosition] = useState({});
  const [map, setMap] = React.useState<google.maps.Map | null>();

  const getUserLocation = () => {
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
            console.log(error);

            reject("Geolocation disabled.");
          }
        );
      } else {
        reject("Geolocation unavailable.");
      }
    });

    return promise;
  };

  useEffect(() => {
    let google = window.google;

    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8
    });

    getUserLocation()
      .then(value => {
        console.log(map);
        map!.setOptions({
          center: value as google.maps.LatLng
        });
      })
      .catch(error => {
        map!.setOptions({
          center: {
            lat: 43.1566,
            lng: -77.6088
          }
        });
      });

    setMap(map);
  }, []);
  return (
    <>
      <div id="map" />
    </>
  );
};

export default Map;

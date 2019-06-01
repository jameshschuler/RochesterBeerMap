import React, { useEffect, useState } from "react";
import { Brewery } from "../App";

declare global {
  interface Window {
    google: any;
  }
}

interface MapProps {
  breweries: Array<Brewery>;
}

const Map: React.FC<MapProps> = ({ breweries }) => {
  const [centerPosition, setCenterPosition] = useState({});
  const [map, setMap] = React.useState<google.maps.Map | null>();

  /**
   *
   */
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
            reject("Geolocation disabled. " + error);
          }
        );
      } else {
        reject("Geolocation unavailable.");
      }
    });

    return promise;
  };

  /**
   *
   * @param map
   */
  const addBreweryMarkers = (map: google.maps.Map) => {
    let google = window.google;
    const geocoder = new google.maps.Geocoder();

    for (let { address, city, state, zipcode, name } of breweries) {
      if (address !== "") {
        let fullAddress = `${address} ${city}, ${state} ${zipcode}`;

        geocoder.geocode(
          { address: fullAddress },
          (results: any, status: any) => {
            if (status === "OK") {
              const position = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              };

              const marker = new google.maps.Marker({
                map,
                title: name,
                position
              });
            }
          }
        );
      }
    }
  };

  useEffect(() => {
    let google = window.google;

    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8
    });

    addBreweryMarkers(map);

    getUserLocation()
      .then(value => {
        map!.setOptions({
          center: value as google.maps.LatLng
        });

        const marker = new google.maps.Marker({
          position: value,
          map: map,
          title: "You!",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });
      })
      .catch(error => {
        map!.setOptions({
          center: {
            lat: 43.1566,
            lng: -77.6088
          }
        });

        const marker = new google.maps.Marker({
          position: {
            lat: 43.1566,
            lng: -77.6088
          },
          map: map,
          title: "You!",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
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

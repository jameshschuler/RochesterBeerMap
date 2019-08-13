import React, { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

interface MapProps {}

const Map: React.FC<MapProps> = () => {
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

    // for (let { breweryName, latitude, longitude } of breweries) {
    //   new google.maps.Marker({
    //     map,
    //     title: breweryName,
    //     position: {
    //       lat: latitude,
    //       lng: longitude
    //     }
    //   });
    // }
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

        new google.maps.Marker({
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

        new google.maps.Marker({
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
      <div className="col s4" id="map-view">
        <div id="map" />
      </div>
    </>
  );
};

export default Map;

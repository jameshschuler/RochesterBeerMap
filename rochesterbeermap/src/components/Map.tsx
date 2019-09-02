import React, { useContext, useEffect, useState } from "react";
import { BreweryContext } from "../contexts/BreweryContext";
import { ContextProps } from "../types/Context";

declare global {
  interface Window {
    google: any;
  }
}

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const { filteredBreweries, breweries } = useContext(
    BreweryContext
  ) as ContextProps;
  const [map, setMap] = useState<google.maps.Map | undefined>();
  const [mapMarkers, setMapMarkers] = useState([]);

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
   * Checks filtered brewery list for a given brewery (matching breweryId and locality)
   * @param breweryId
   * @param locality
   */
  const doesContain = (breweryId: string, locality: string) => {
    for (let brewery of filteredBreweries) {
      if (brewery.breweryId === breweryId && brewery.locality === locality) {
        return true;
      }
    }

    return false;
  };

  useEffect(() => {
    console.log("run once");
    let google = window.google;

    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8
    });

    let markers = [];
    for (let brewery of breweries) {
      const marker = new google.maps.Marker({
        map,
        position: {
          lat: brewery.latitude,
          lng: brewery.longitude
        },
        title: brewery.breweryName,
        breweryId: brewery.breweryId,
        locality: brewery.locality
      });

      marker.addListener("click", (e: any) => {
        // TODO: scroll brewery card into view on click
        console.log(marker.breweryId);
      });

      markers.push(marker);
    }

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
          title: "Rochester, NY",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });
      });

    setMap(map);
    setMapMarkers(markers as any);
  }, []);

  useEffect(() => {
    // TODO: can we make this more efficient?
    for (let i = 0; i < mapMarkers.length; i++) {
      let marker: any = mapMarkers[i];

      if (doesContain(marker.breweryId, marker.locality)) {
        marker.setMap(map);
      } else {
        marker.setMap(null);
      }
    }
  }, [filteredBreweries]);

  return (
    <>
      <div className="col m4 s12" id="map-view">
        <div id="map" />
      </div>
    </>
  );
};

export default Map;

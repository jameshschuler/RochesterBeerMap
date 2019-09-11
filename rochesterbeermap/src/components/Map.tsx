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
   * Checks if the user has enabled geolocation in their browser
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
    let result = filteredBreweries.filter(brewery => {
      if (brewery.breweryId === breweryId && brewery.locality === locality) {
        return true;
      }
      return false;
    });

    return result.length > 0;
  };

  /**
   * Runs once when the component is mounted
   */
  useEffect(() => {
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

      marker.addListener("click", () => {
        // TODO: should we filter to the clicked brewery or scroll to it?
        // TODO: ??
        // const breweryListView = document.getElementById("brewery-list-view");
        // breweryListView!
        //   .querySelectorAll(".brewery-detail-view.selected")
        //   .forEach(element => {
        //     element.classList.remove("selected");
        //   });
        // const element = breweryListView!.querySelector(
        //   `.brewery[data-brewery-id="${marker.breweryId}"]`
        // );
        // if (element) {
        //   element
        //     .querySelector(".brewery-detail-view")!
        //     .classList.add("selected");
        //   element.scrollIntoView({ behavior: "smooth" });
        // }
      });

      markers.push(marker);
    }

    /**
     * Attempts to get the user's location and add a marker for their location.
     */
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

    // Update state
    setMap(map);
    setMapMarkers(markers as any);
  }, []);

  /**
   * Runs any time the filtered list of breweries is updated.
   * Toggles the map markers based on which breweries are found in the filteredBreweries array
   */
  useEffect(() => {
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

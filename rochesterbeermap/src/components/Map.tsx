import React, { useContext, useEffect, useState } from "react";
import { BreweryContext } from "../store/contexts/BreweryContext";
import { ContextProps } from "../types/Context";
import CustomMarker from "../types/CustomMarker";
import { getUserLocation } from "../utilities/userLocation";

declare global {
  interface Window {
    google: any;
  }
}

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const { filteredBreweries, breweries, filterBreweries } = useContext(
    BreweryContext
  ) as ContextProps;

  // State
  const [map, setMap] = useState<google.maps.Map | undefined>();
  const [mapMarkers, setMapMarkers] = useState<Array<CustomMarker>>([]);

  const rochesterPosition = {
    lat: 43.1566,
    lng: -77.6088
  };

  /**
   * Checks filtered brewery list for a given brewery (matching breweryId and locality).
   * @param breweryId
   * @param locality
   * @returns whether breweryId / locality combination was found.
   */
  const doesContain = (breweryId: string, locality: string): boolean => {
    let result = filteredBreweries.filter(brewery => {
      if (brewery.breweryId === breweryId && brewery.locality === locality) {
        return true;
      }
      return false;
    });

    return result.length > 0;
  };

  /**
   * Loops through breweries and creates a CustomMarker object for each one.
   * @param map
   */
  const createMapMarkers = (map: google.maps.Map) => {
    const markers = new Array<CustomMarker>();

    for (let brewery of breweries) {
      const marker = new CustomMarker(
        map,
        {
          lat: brewery.latitude,
          lng: brewery.longitude
        },
        google.maps.Animation.DROP,
        `${brewery.breweryName} \n${brewery.locality}, ${brewery.state}`,
        brewery.breweryId,
        brewery.breweryName,
        brewery.locality
      );

      marker.addListener("click", () => {
        filterBreweries(marker.breweryName);
        const element = document.getElementById("filter") as HTMLInputElement;
        element!.value = marker.breweryName;
      });

      markers.push(marker);
    }

    return markers;
  };

  /**
   * Runs once when the component is mounted
   */
  useEffect(() => {
    let google = window.google;

    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8
    });

    const markers = createMapMarkers(map);

    /**
     * Attempts to get the user's location and add a marker for their location.
     */
    getUserLocation()
      .then(coords => {
        map!.setOptions({
          center: coords as google.maps.LatLng
        });

        new google.maps.Marker({
          position: coords,
          map: map,
          title: "You!",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });
      })
      .catch(() => {
        map!.setOptions({
          center: rochesterPosition
        });

        new google.maps.Marker({
          position: rochesterPosition,
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
    for (let marker of mapMarkers) {
      if (doesContain(marker.breweryId, marker.locality)) {
        marker.setMap(map!);
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

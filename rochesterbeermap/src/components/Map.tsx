import React, { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const Map: React.FC = () => {
  useEffect(() => {
    // TODO: attempt to get user's location otherwise center on rochester ny

    let google = window.google;
    console.log(google);
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }, []);
  return <div id="map" />;
};

export default Map;

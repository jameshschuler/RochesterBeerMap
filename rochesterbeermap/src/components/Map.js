import React from "react";
import { compose, withProps } from "recompose";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

// TODO: this needs to be moved and protected
const apikey = "AIzaSyDgYTCbUmoMEhzsv_EdIaOZ99LHU7R2noU";

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apikey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ markers, userPos }) => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 43.1566, lng: -77.6088 }}>
    <Marker
      title={"You!"}
      icon={
        "https://mt.google.com/vt/icon?psize=30&font=fonts/arialuni_t.ttf&color=ff304C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=48&text=%E2%80%A2"
      }
      position={{ lat: userPos.userLat, lng: userPos.userLng }}
    />
    {markers.map((marker, index) => {
      return (
        <Marker
          title={marker.name}
          key={index}
          position={{
            lat: parseFloat(marker.latitude),
            lng: parseFloat(marker.longitude)
          }}
        />
      );
    })}
  </GoogleMap>
));

export default Map;

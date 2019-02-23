import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import { compose, withProps } from "recompose";
import InfoWindowMarker from "./InfoWindowMarker";

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_MAP_API_KEY
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ markers, userPosition }) => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 43.1566, lng: -77.6088 }}>
    {userPosition && (
      <Marker
        title={"You!"}
        icon={
          "https://mt.google.com/vt/icon?psize=30&font=fonts/arialuni_t.ttf&color=ff304C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=48&text=%E2%80%A2"
        }
        position={{
          lat: parseFloat(userPosition.lat),
          lng: parseFloat(userPosition.lng)
        }}
      />
    )}

    {markers.map((marker, index) => {
      return (
        <InfoWindowMarker
          key={index}
          marker={marker}
          position={{
            lat: parseFloat(marker.location._lat),
            lng: parseFloat(marker.location._long)
          }}
        />
      );
    })}
  </GoogleMap>
));

export default Map;

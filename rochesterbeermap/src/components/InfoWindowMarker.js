import React, { Component } from "react";
import { InfoWindow, Marker } from "react-google-maps";

class InfoWindowMarker extends Component {
  state = {
    isOpen: false
  };

  handleToggleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { position, marker } = this.props;

    return (
      <Marker
        title={`${marker.name}\n${marker.address}\n${marker.city}, ${
          marker.state
        } ${marker.zipcode}`}
        position={position}
        onClick={() => this.handleToggleOpen()}
      >
        {this.state.isOpen && (
          <InfoWindow
            className="test"
            style={{ width: 100 }}
            onCloseClick={this.handleToggleClose}
          >
            <p className="center">Hello</p>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default InfoWindowMarker;

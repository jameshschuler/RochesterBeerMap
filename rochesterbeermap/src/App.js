import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { connect } from "react-redux";
import { getBreweries } from "./store/actions/breweryActions";
import ResultList from "./components/ResultList";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    userLat: null,
    userLng: null
  };

  componentDidMount() {
    this.getUserLocation();

    this.props.getBreweries();
  }

  getUserLocation = () => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        position => {
          // for when getting location is a success
          this.setState({
            userLat: position.coords.latitude,
            userLng: position.coords.longitude
          });
        },
        error_message => {
          // TODO: do we care?
        }
      );
    } else {
      // TODO: alert user geolocation is not enabled
      console.log("geolocation is not enabled on this browser");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="App hero-body">
          {this.props.isFetching && <Loader />}
          <Header />
          <Map markers={this.props.breweries} userPos={this.state} />
          <ResultList breweries={this.props.breweries} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.brewery.isFetching,
    breweries: state.brewery.filteredBreweries
  };
};

export default connect(
  mapStateToProps,
  { getBreweries }
)(App);

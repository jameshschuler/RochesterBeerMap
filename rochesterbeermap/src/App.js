import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Loader from "./components/Loader";
import { getBreweries } from "./store/actions/breweryActions";

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
      navigator.geolocation.getCurrentPosition(position => {
        // for when getting location is a success
        this.setState({
          userLat: position.coords.latitude,
          userLng: position.coords.longitude
        });
      });
    }
  };

  render() {
    return (
      <div className="App">
        {this.props.isFetching && <Loader />}
        <Header />
        <Container userPos={this.state} />
        <Footer />
      </div>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { getBreweries } from "../../store/actions/breweryActions";
import Map from "../Map";
import ResultList from "../ResultList";
import SearchContainer from "../Search/SearchContainer";

class Container extends Component {
  render() {
    const { breweries, userPos } = this.props;

    return (
      <React.Fragment>
        <SearchContainer />
        <Map markers={breweries} userPos={userPos} />
        <ResultList breweries={breweries} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    breweries: state.brewery.filteredBreweries
  };
};

export default connect(
  mapStateToProps,
  { getBreweries }
)(Container);

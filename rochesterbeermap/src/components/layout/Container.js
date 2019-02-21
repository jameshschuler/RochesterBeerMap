import React, { Component } from "react";
import { connect } from "react-redux";
import { getBreweries } from "../../store/actions/breweryActions";
import Map from "../Map";
import Result from "../Result";
import SearchContainer from "../Search/SearchContainer";

class Container extends Component {
  state = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  };

  render() {
    const { breweries, userPos } = this.props;

    const currentDay = this.state.days[new Date().getDay()];

    return (
      <React.Fragment>
        <SearchContainer />
        <Map markers={breweries} userPos={userPos} />
        <div id="result-list" className="row">
          {breweries &&
            breweries.length > 0 &&
            breweries.map((brewery, index) => {
              return (
                <Result
                  key={index}
                  userPos={userPos}
                  currentDay={currentDay}
                  brewery={brewery}
                />
              );
            })}
        </div>
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

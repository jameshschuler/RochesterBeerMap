import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterBreweries,
  getBreweries
} from "../../../store/actions/breweryActions";
import { getUserPosition } from "../../../store/actions/userActions";
import Loader from "../../Loader";
import Map from "./Map";
import Result from "./Result";
import SearchForm from "./SearchForm";

class SearchPage extends Component {
  filterResults = query => {
    this.props.filterBreweries(query);
  };

  async componentDidMount() {
    await this.props.getUserPosition();
    await this.props.getBreweries();
  }

  componentDidCatch(error, info) {
    this.location.push("/error");
  }

  render() {
    const { breweries, userPosition } = this.props;

    return (
      <React.Fragment>
        {this.props.isFetching && <Loader />}
        <SearchForm filterResults={this.filterResults} />
        <Map markers={breweries} userPosition={userPosition} />
        <div id="result-list" className="row">
          {breweries &&
            breweries.length > 0 &&
            breweries.map((brewery, index) => {
              return (
                <Result
                  key={index}
                  userPosition={userPosition}
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
    isFetching: state.brewery.isFetching,
    breweries: state.brewery.filteredBreweries,
    userPosition: state.user.userPosition
  };
};

export default connect(
  mapStateToProps,
  {
    filterBreweries,
    getBreweries,
    getUserPosition
  }
)(SearchPage);

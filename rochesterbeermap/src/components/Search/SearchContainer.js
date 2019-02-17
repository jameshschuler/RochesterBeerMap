import React, { Component } from "react";
import { connect } from "react-redux";
import { filterBreweries } from "../../store/actions/breweryActions";
import SearchForm from "./SearchForm";

class SearchContainer extends Component {
  filterResults = query => {
    this.props.filterBreweries(query);
  };

  render() {
    return <SearchForm filterResults={this.filterResults} />;
  }
}

export default connect(
  null,
  {
    filterBreweries
  }
)(SearchContainer);

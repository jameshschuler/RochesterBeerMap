import React, { Component } from 'react'
import SearchForm from './Forms/SearchForm';
import {connect} from "react-redux";
import { filterBreweries } from "../store/actions/breweryActions";

class SearchContainer extends Component {
    filterResults = (query) => {
        this.props.filterBreweries(query);
    }

  render() {
    return (
        <SearchForm filterResults={this.filterResults} />
    )
  }
}

export default connect(null, {
    filterBreweries
})(SearchContainer);

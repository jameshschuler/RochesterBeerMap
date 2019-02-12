import React, { Component } from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import SuggestBreweryForm from "./Forms/SuggestBreweryForm";
import Loader from "./Loader";
import Notification from "./Notification";

import { addBrewerySuggestion } from "../store/actions/breweryActions";

import { connect } from "react-redux";

class SuggestBreweryContainer extends Component {
  submitBrewery = brewery => {
    this.props.addBrewerySuggestion(brewery);
  };

  render() {
    const { isFetching, error, response } = this.props;

    return (
      <React.Fragment>
        <div className="hero-body">
          {isFetching && <Loader />}
          <div className="level">
            <div className="level-left flex-column align-items-start">
              <NavLink exact to="/" className="level-item has-text-info mb-1">
                <i className="fas fa-arrow-left mr-1" />
                Back to Brewery Map
              </NavLink>
              <h2 className="title level-item">Rochester Beer Map</h2>
            </div>
          </div>
          <div className="columns" id="submit-brewery-body">
            <div className="column is-6 is-offset-3">
              <h1 className="title has-text-centered is-size-2 align-items-center">
                New Brewery
                <i className="fas fa-fw fa-lg fa-beer ml-1" />
              </h1>
              {error && (
                <Notification type={"is-danger"} title={"Error"} message={error.message} />
              )}
              {response && (
                <Notification type={"is-success"} title={"Success!"} message={response.message} />
              )}

              <SuggestBreweryForm submitBrewery={this.submitBrewery} />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.brewery.isFetching,
    error: state.brewery.error,
    response: state.brewery.response
  };
};

export default connect(
  mapStateToProps,
  {
    addBrewerySuggestion
  }
)(SuggestBreweryContainer);

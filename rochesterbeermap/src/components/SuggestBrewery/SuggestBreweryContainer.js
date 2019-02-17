import React, { Component } from "react";
import { connect } from "react-redux";
import { addBrewerySuggestion } from "../../store/actions/breweryActions";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Loader from "../Loader";
import Notification from "../Notification";
import SuggestBreweryForm from "./SuggestBreweryForm";

class SuggestBreweryContainer extends Component {
  submitBrewery = async brewery => {
    await this.props.addBrewerySuggestion(brewery);

    window.scrollTo(0, 0);
  };

  render() {
    const { isFetching, error, response } = this.props;

    return (
      <div className="App">
        {isFetching && <Loader />}
        <Header />

        <div className="row">
          <div className="col s12">
            {response && response.success === true && (
              <Notification
                title={"Success!"}
                message={response.message}
                type={"success"}
              />
            )}
            {error && error.message && (
              <Notification
                title={"Error!"}
                message={error.message}
                type={"error"}
              />
            )}

            <h3 className="center">Suggest New Brewery</h3>
          </div>
        </div>

        <SuggestBreweryForm submitBrewery={this.submitBrewery} />

        <Footer />
      </div>
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

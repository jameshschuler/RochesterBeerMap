import React, { Component } from "react";
import { connect } from "react-redux";
import { addBrewerySuggestion } from "../../../store/actions/breweryActions";
import Loader from "../../Loader";
import Notification from "../../Notification";
import SuggestBreweryForm from "./SuggestBreweryForm";

class SuggestBreweryPage extends Component {
  submitBrewery = async brewery => {
    await this.props.addBrewerySuggestion(brewery);

    window.scrollTo(0, 0);
  };

  componentDidCatch(error, info) {
    this.location.push("/error");
  }

  render() {
    const { isFetching, error, response } = this.props;

    return (
      <React.Fragment>
        {isFetching && <Loader />}
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

            <h3 className="center grey-text text-darken-3">
              Suggest New Brewery
            </h3>
          </div>
        </div>

        <SuggestBreweryForm submitBrewery={this.submitBrewery} />
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
)(SuggestBreweryPage);

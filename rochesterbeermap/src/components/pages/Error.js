import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="center" id="not-found-page">
            <h1>
              Oops! <i className="far fa-fw fa-frown" />
            </h1>
            <h3>We've encountered an error!</h3>
            <Link
              to="/"
              className="mt-3 btn btn-large orange darken-1 waves-effect waves-light"
            >
              Head back to find more awesome breweries!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

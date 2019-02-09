import React from "react";

const Result = ({
  brewery: { name, address, city, state, zipcode, phone }
}) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{name}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p className="is-flex align-items-center">
              {phone} <i className="ml-1 fas fa-fw fa-phone" />
            </p>
            <p>{address}</p>
            <p>
              {city}, {state} {zipcode}
            </p>
          </div>
        </div>
        <footer className="card-footer">
          <a href="!" className="card-footer-item">
            Website
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Result;

import React from "react";

const Result = ({
  brewery: {
    name,
    address,
    city,
    state,
    zipcode,
    phone,
    website,
    hasFood,
    hasWine,
    hasLiquor
  }
}) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <header className="card-header">
          <div className="card-header-title is-flex flex-column w-100">
            <p>{name}</p>
            <div className="icon-container">
              <i className="fas fa-beer fa-fw" />
              {hasWine && <i className="ml-1 fas fa-fw fa-wine-glass-alt" />}
              {hasLiquor && <i className="ml-1 fas fa-fw fa-glass-martini" />}
              {hasFood && <i className="ml-1 fas fa-fw fa-hamburger" />}
            </div>
          </div>
        </header>
        <div className="card-content">
          <div className="content">
            <p className="is-flex align-items-center">
              {phone}
              <i className="ml-1 fas fa-fw fa-phone" />
            </p>
            <p>{address}</p>
            <p>
              {city}, {state} {zipcode}
            </p>
          </div>
        </div>
        <footer className="card-footer">
          {website !== "" ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="card-footer-item"
            >
              Learn More!
            </a>
          ) : null}
        </footer>
      </div>
    </div>
  );
};

export default Result;

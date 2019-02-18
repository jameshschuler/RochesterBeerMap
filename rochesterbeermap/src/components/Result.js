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
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-content">
          <div className="icon-container">
            <i className="fas fa-lg fa-beer fa-fw" />
            <i
              className={`fas fa-lg fa-fw fa-wine-glass-alt ${
                hasWine ? "" : "faded"
              }`}
            />
            <i
              className={`fas fa-lg fa-fw fa-glass-martini ${
                hasLiquor ? "" : "faded"
              }`}
            />
            <i
              className={`fas fa-lg fa-fw fa-hamburger ${
                hasFood ? "" : "faded"
              }`}
            />
          </div>
          <span className="card-title">{name}</span>
          <p className="">{phone}</p>
          <p>{address}</p>
          <p>
            {city}, {state} {zipcode}
          </p>
        </div>
        <div className="card-action">
          {website !== "" ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Learn More!
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Result;

import React from "react";
import {
  generateDirectionsLink,
  getCurrentDay,
  sortDays
} from "../../../utils";

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
    hasLiquor,
    hours,
    location
  },
  userPosition
}) => {
  let directionsLink = generateDirectionsLink(userPosition, location);

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
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
              <i className="right fas fa-lg fa-directions fa-fw blue-text lighten-1 get-directions" />
            </a>
          </div>
          <span className="card-title">{name}</span>
          <div className="location-container">
            <div className="address-container">
              <p>{phone}</p>
              <p>{address}</p>
              <p>
                {city}, {state} {zipcode}
              </p>
            </div>
          </div>

          <div className="hours">
            {hours &&
              Object.keys(sortDays(hours)).map((key, index) => {
                return (
                  <p
                    key={index}
                    className={`${key === getCurrentDay() ? "bold" : ""}`}
                  >
                    <span>{key}:</span> <span>{hours[key]}</span>
                  </p>
                );
              })}
          </div>
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

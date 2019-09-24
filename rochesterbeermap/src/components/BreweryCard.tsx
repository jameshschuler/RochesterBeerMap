import React from "react";
import { Brewery } from "../types/Brewery";

interface BreweryCardProps {
  brewery: Brewery;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ brewery }) => {
  return (
    <div className="col l4 m6 s12 brewery" data-brewery-id={brewery.breweryId}>
      <div className="brewery-detail-view">
        <div className="card">
          <div className="card-content">
            <span className="card-title text-bold-500">
              {brewery.breweryName}
              <hr />
            </span>
            <div className="brewery-information">
              {brewery.phone && (
                <span>
                  <b>Phone:</b> {brewery.phone}
                </span>
              )}
              <span>
                <b>Address:</b>
              </span>
              <span>{brewery.streetAddress}</span>
              <span>
                {brewery.locality}, {brewery.state} {brewery.countryIsoCode}{" "}
                {brewery.postalCode}
              </span>
              {brewery.established !== "" && (
                <span>
                  <b>Established: </b>
                  {brewery.established}
                </span>
              )}
              {brewery.yearOpened !== "" && (
                <span>
                  <b>Year Opened: </b>
                  {brewery.yearOpened}
                </span>
              )}
              {brewery.distance !== "" && (
                <span>
                  <b>Distance (from Rochester): </b>
                  {brewery.distance} mi.
                </span>
              )}
            </div>
          </div>
          <div className="card-action center-align blue">
            <a
              target="_blank"
              className="white-text text-bold-500"
              rel="noopener noreferrer"
              href={brewery.website}
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreweryCard;

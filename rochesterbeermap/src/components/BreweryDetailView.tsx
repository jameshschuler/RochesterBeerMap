import React from "react";
import { Brewery } from "../types/Brewery";

interface BreweryDetailViewProps {
  brewery: Brewery;
}

const BreweryDetailView: React.FC<BreweryDetailViewProps> = ({ brewery }) => {
  return (
    <div className="col l4 m6 s12 brewery" data-brewery-id={brewery.breweryId}>
      <div className="brewery-detail-view">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{brewery.breweryName}</span>
            <div className="brewery-information">
              {brewery.phone && (
                <span>
                  <b>Phone:</b> {brewery.phone}
                </span>
              )}
              <span>
                <b>Address:</b> {brewery.streetAddress} {brewery.locality},{" "}
                {brewery.state} {brewery.countryIsoCode} {brewery.postalCode}
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
                  <b>From Rochester: </b>
                  {brewery.distance} mi.
                </span>
              )}
            </div>
          </div>
          <div className="card-action">
            <a target="_blank" rel="noopener noreferrer" href={brewery.website}>
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreweryDetailView;

import React from "react";
import { Brewery } from "../types/Brewery";

interface BreweryListProps {
  breweries: Array<Brewery>;
}

const BreweryList: React.FC<BreweryListProps> = ({ breweries }) => {
  return (
    <ul id="slide-out" className="sidenav collapsible">
      {breweries.map(brewery => {
        return (
          <li key={brewery.id}>
            <div className="collapsible-header">{brewery.breweryName}</div>
            <div className="collapsible-body">
              <div className="content">
                <span>{brewery.phone}</span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={brewery.website}
                  >
                    {brewery.website}
                  </a>
                </span>
                <span>{brewery.streetAddress}</span>
                <span>
                  {brewery.locality}, {brewery.state} {brewery.postalCode}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default BreweryList;

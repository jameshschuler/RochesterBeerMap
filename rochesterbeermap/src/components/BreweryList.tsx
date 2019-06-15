import React from "react";
import { Brewery } from "../App";

interface BreweryListProps {
  breweries: Array<Brewery>;
}

const BreweryList: React.FC<BreweryListProps> = ({ breweries }) => {
  return (
    <ul id="slide-out" className="sidenav collapsible">
      {breweries.map(brewery => {
        return (
          <li key={brewery.id}>
            <div className="collapsible-header">{brewery.name}</div>
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
                <span>{brewery.address}</span>
                <span>
                  {brewery.city}, {brewery.state} {brewery.zipcode}
                </span>
                <span>
                  {brewery.food && <i className="fas fa-fw fa-utensils mr-1" />}
                  {brewery.liquor && (
                    <i className="fas fa-glass-martini-alt mr-1" />
                  )}
                  {brewery.wine && (
                    <i className="fas fa-fw fa-wine-glass-alt" />
                  )}
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

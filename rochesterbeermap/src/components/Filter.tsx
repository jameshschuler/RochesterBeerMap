import React, { useContext } from "react";
import { BreweryContext } from "../contexts/BreweryContext";
import { ContextProps } from "../types/Context";

const Filter: React.FC = () => {
  const { filteredBreweries, isLoading } = useContext(
    BreweryContext
  ) as ContextProps;
  return (
    <div className="row">
      <div className="col l12 m12 s12">
        <div>
          <h4>Breweries ({filteredBreweries.length})</h4>
          <input id="filter" type="text" placeholder="Filter..." />
        </div>
      </div>
    </div>
  );
};

export default Filter;

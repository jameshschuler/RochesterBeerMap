import React, { useContext } from "react";
import { BreweryContext } from "../contexts/BreweryContext";
import { ContextProps } from "../types/Context";

const Filter: React.FC = () => {
  const { filteredBreweries, filterBreweries } = useContext(
    BreweryContext
  ) as ContextProps;

  const filter = (e: any) => {
    const query = e.target.value;
    filterBreweries(query);
  };
  return (
    <div className="row">
      <div className="col l12 m12 s12">
        <div>
          <h4>Breweries ({filteredBreweries.length})</h4>
          <input
            id="filter"
            type="text"
            placeholder="Filter by name or city..."
            onKeyUp={filter}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

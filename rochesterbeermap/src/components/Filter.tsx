import React, { useContext } from "react";
import { BreweryContext } from "../store/contexts/BreweryContext";
import { ContextProps } from "../types/Context";

const Filter: React.FC = () => {
  const { filteredBreweries, filterBreweries } = useContext(
    BreweryContext
  ) as ContextProps;

  const filter = (e: any): void => {
    const query = e.target.value;
    filterBreweries(query);
  };

  const clear = (): void => {
    const input = document.getElementById("filter")! as HTMLInputElement;
    input!.value = "";
    filterBreweries("");
  };

  return (
    <div className="row">
      <div className="col l12 m12 s12">
        <div className="row">
          <h4 className="col s12 m12">
            Breweries ({filteredBreweries.length})
          </h4>
          <div className="input-field col s12 m8">
            <input
              id="filter"
              type="text"
              placeholder="Filter by name or city..."
              onKeyUp={filter}
              autoComplete="off"
            />
            <i className="material-icons prefix small" onClick={() => clear()}>
              clear
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

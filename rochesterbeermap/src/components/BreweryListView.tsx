import React, { useContext } from "react";
import { BreweryContext } from "../contexts/BreweryContext";
import { ContextProps } from "../types/Context";
import BreweryDetailView from "./BreweryDetailView";

interface BreweryListProps {}

const BreweryListView: React.FC = () => {
  const { breweries, isLoading } = useContext(BreweryContext) as ContextProps;

  return (
    <div className="col m8 s12" id="brewery-list-view">
      <div className="row">
        {breweries.length ? (
          breweries.map((brewery, index) => {
            return <BreweryDetailView brewery={brewery} key={index} />;
          })
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};
export default BreweryListView;

import React, { useContext } from "react";
import { BreweryContext } from "../contexts/BreweryContext";
import { ContextProps } from "../types/Context";
import BreweryDetailView from "./BreweryDetailView";
import Filter from "./Filter";
import Alert from "./helpers/Alert";

interface BreweryListProps {}

const BreweryListView: React.FC = () => {
  const { filteredBreweries, isLoading } = useContext(
    BreweryContext
  ) as ContextProps;

  return (
    <div className="col m8 s12" id="brewery-list-view">
      <Filter />
      <div
        className="fixed-action-btn"
        onClick={() => {
          // TODO: add animation
          document.getElementById("brewery-list-view")!.scrollTop = 0;
        }}
      >
        <a className="btn-floating btn-large blue">
          <i className="large material-icons">arrow_upward</i>
        </a>
      </div>
      <div className="row">
        {filteredBreweries.length ? (
          filteredBreweries.map((brewery, index) => {
            return <BreweryDetailView brewery={brewery} key={index} />;
          })
        ) : (
          <Alert
            type={"INFO"}
            message={"No brewery data was found. Please try again!"}
          />
        )}
      </div>
    </div>
  );
};
export default BreweryListView;

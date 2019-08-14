import React from "react";
import { Brewery } from "../types/Brewery";

interface BreweryDetailViewProps {
  brewery: Brewery;
}

const BreweryDetailView: React.FC<BreweryDetailViewProps> = () => {
  return (
    <div className="col l4 m6 s12">
      <div className="brewery-detail-view">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            {/* <a href="">This is a link</a>
          <a href="">This is a link</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreweryDetailView;

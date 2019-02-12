import React from "react";
import SearchContainer from "./SearchContainer";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="level">
      <div className="level-left">
        <h2 className="title level-item">Rochester Beer Map</h2>
      </div>
      <div className="level-right">
        <NavLink exact to="/suggest-brewery" className="level-item has-text-info">
          Don't see one of your favorites? Let us know!
        </NavLink>
        <SearchContainer />
      </div>
    </div>
  );
};

export default Header;

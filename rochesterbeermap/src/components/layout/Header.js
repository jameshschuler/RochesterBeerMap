import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey">
        <NavLink exact to="/" className="left brand-logo">
          Rochester Beer Map
        </NavLink>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink exact to="/suggest-brewery">
              Suggest New Brewery
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="amber accent-4">
        <div className="nav-wrapper">
          <NavLink
            exact
            to="/"
            className="brand-logo grey-text text-lighten-4 amber accent-4 hide-on-large-only show-on-medium-and-down"
          >
            R.B.M.
          </NavLink>
          <NavLink
            exact
            to="/"
            className="grey-text text-lighten-4 brand-logo amber accent-4 hide-on-med-and-down"
          >
            Rochester Beer Map
          </NavLink>
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink
                exact
                to="/suggest-brewery"
                className="hide-on-med-and-down grey-text text-lighten-4"
              >
                Suggest New Brewery
              </NavLink>
              <NavLink
                exact
                to="/suggest-brewery"
                className="hide-on-large-only show-on-medium-and-down grey-text text-lighten-4"
              >
                <i className="fa fa-fw fa-lg fa-plus" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="orange darken-1">
        <div className="nav-wrapper">
          <NavLink
            exact
            to="/"
            className="brand-logo grey-text text-lighten-4 orange darken-1 hide-on-large-only show-on-medium-and-down"
          >
            R.B.M.
          </NavLink>
          <NavLink
            exact
            to="/"
            className="grey-text text-lighten-4 brand-logo orange darken-1 hide-on-med-and-down"
          >
            Rochester Beer Map
          </NavLink>
          <button
            style={{ border: 0 }}
            data-target="mobile-links"
            className="orange darken-1 white-text sidenav-trigger hide-on-large-only"
          >
            <i className="material-icons">menu</i>
          </button>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink
                exact
                to="/suggest-brewery"
                className="grey-text text-lighten-4"
              >
                Suggest New Brewery
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav blue-grey" id="mobile-links">
        <li>
          <NavLink
            exact
            to="/suggest-brewery"
            className="grey-text text-lighten-4"
          >
            Suggest New Brewery
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Header;

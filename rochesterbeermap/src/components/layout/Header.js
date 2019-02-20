import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="blue-grey">
        <div className="nav-wrapper">
          <NavLink
            exact
            to="/"
            className="brand-logo blue-grey hide-on-large-only show-on-medium-and-down"
          >
            R.B.M.
          </NavLink>
          <NavLink
            exact
            to="/"
            className="brand-logo blue-grey hide-on-med-and-down"
          >
            Rochester Beer Map
          </NavLink>
          <button
            style={{ border: 0 }}
            data-target="mobile-links"
            className="blue-grey white-text sidenav-trigger hide-on-large-only"
          >
            <i className="material-icons">menu</i>
          </button>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink exact to="/suggest-brewery">
                Suggest New Brewery
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav blue-grey" id="mobile-links">
        <li>
          <NavLink exact to="/suggest-brewery" className="white-text">
            Suggest New Brewery
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Header;

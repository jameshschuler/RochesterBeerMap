// Import Materialize
import * as M from "materialize-css";
import React, { useEffect } from "react";
import { Brewery } from "../App";

interface NavbarProps {
  breweries: Array<Brewery>;
}

const Navbar: React.FC<NavbarProps> = ({ breweries }) => {
  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Rochester Beer Map
          </a>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        {breweries.map(brewery => {
          return <li key={brewery.id}>{brewery.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Navbar;

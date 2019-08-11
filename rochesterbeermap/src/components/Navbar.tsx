// Import Materialize
import * as M from "materialize-css";
import React, { useEffect } from "react";
import { Brewery } from "../types/Brewery";
import BreweryList from "./BreweryList";

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
          <a href="/" className="brand-logo">
            Rochester Beer Map
          </a>
          <a href="!#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <BreweryList breweries={breweries} />
    </>
  );
};

export default Navbar;

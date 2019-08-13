// Import Materialize
import * as M from "materialize-css";
import React, { useEffect } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;

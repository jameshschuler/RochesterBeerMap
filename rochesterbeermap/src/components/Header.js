import React from "react";
import SearchForm from "./Forms/SearchForm";

const Header = () => {
  return (
    <div className="level">
      <div className="level-left">
        <h2 className="title level-item">Rochester Beer Map</h2>
      </div>
      <div className="level-right">
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;

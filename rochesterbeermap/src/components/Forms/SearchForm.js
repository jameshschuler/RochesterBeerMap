import React from "react";

const SearchForm = () => {
  return (
    <form className="level-item">
      <div className="field">
        <p className="control has-icons-right">
          <input className="input" type="text" placeholder="Find a brewery" />
          <span className="icon is-small is-right">
            <i className="fas fa-search" />
          </span>
        </p>
      </div>
    </form>
  );
};

export default SearchForm;

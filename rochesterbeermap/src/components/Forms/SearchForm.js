import React, { useState } from "react";

const SearchForm = ({ filterResults }) => {
  const [query, setQuery] = useState("");
  let typingTimer;
  const doneTypingInterval = 1000;

  const handleKeyUp = e => {
    clearTimeout(typingTimer);

    typingTimer = setTimeout(filterResults(query), doneTypingInterval);
  };

  return (
    <form className="level-item">
      <div className="field">
        <p className="control has-icons-right">
          <input
            autoComplete="off"
            value={query}
            onKeyUp={e => handleKeyUp(e)}
            onChange={e => setQuery(e.target.value)}
            className="input"
            type="text"
            name="query"
            placeholder="Find a brewery"
          />
          <span className="icon is-small is-right">
            <i className="fas fa-search" />
          </span>
        </p>
      </div>
    </form>
  );
};

export default SearchForm;

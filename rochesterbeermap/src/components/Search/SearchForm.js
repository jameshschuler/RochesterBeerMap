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
    <form id="search-form">
      <div className="input-field">
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
        <i className="material-icons prefix">search</i>
      </div>
    </form>
  );
};

export default SearchForm;

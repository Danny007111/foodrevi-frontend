import React from "react";

function Search({ search, onSearchChange }) {
  return (
    <nav>
      <h4>Search for your dish here</h4>
      <input
        type="text"
        name="search"
        placeholder="Dish name..."
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
    </nav>
  );
}

export default Search;
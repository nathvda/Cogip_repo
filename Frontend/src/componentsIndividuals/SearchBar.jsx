import React, { useState } from "react";

const SearchBar = ({ keyword, onChange }) => {
  return (
    <input
      key="search-bar"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;

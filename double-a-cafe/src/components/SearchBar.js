import React from "react";


function SearchBar({ setSearchString}) {
    return (
      <div className="searchbar">
        <label htmlFor="search">Search Drink:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a drink to search..."
  
          onChange={  (e) => setSearchString(e.target.value)  }
        />
      </div>
    );
  }

  export default SearchBar;



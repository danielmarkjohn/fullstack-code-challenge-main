import React, { useState, useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";
import newsapi from "../services/newsapi";
import "../styles/searchbar.css";
import {KEYWORD_SEARCH_SUBDIRECTORY, DEFAULT_UK_TOP_HEADLINES_MESSAGE} from "../constants/constants";
function SearchBar() {
  const [heading, setHeading] = useState(DEFAULT_UK_TOP_HEADLINES_MESSAGE);
  const [inputError, setInputError] = useState("");
  const [searchText, setSearchText] = useState("");
  const { setData } = useContext(NewsContext);

  const searchKeyword = () => {
    // TODO
  };

  const searchOnEnterKeyDown = (event)=>{
    if(event.key === 'Enter'){
      searchKeyword();
    }
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setInputError("");
  };

  return (
    <div className="search-bar">
      <div className="search-form">
        <p className="input-error">{inputError}</p>
        <input
          type="text"
          required
          className="search-input"
          placeholder="Search for articles"
          onChange={handleChange}
          onKeyDown={searchOnEnterKeyDown}
        />
        <button type="submit" className="search-button" onClick={searchKeyword} data-testid="search-button">
          Search
        </button>
      </div>
      <div className="search-header">{heading}</div>
    </div>
  );
}

export default SearchBar;

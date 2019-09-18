import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import { usePrevious } from "../hooks";
import "../styles/search-bar.css"

const handleEnter = (e, setSubmitted) => {
  if (e.keyCode === 13) {
    setSubmitted(true);
  }
}

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const previousSubmit = usePrevious(submitted);
  
  // Reset state after redirecting
  useEffect(() => {
    if (previousSubmit) {
      setSubmitted(false);
    }
  }, [previousSubmit]);

  if (submitted) {
    return <Redirect to={`/search/${searchValue}`}/>
  }

  return (
    <div className="SearchBar">
      <span>Search for movies</span>
      <input 
        onChange={event => setSearchValue(event.target.value)}
        onKeyDown={e => handleEnter(e, setSubmitted)}
        type="text"
        placeholder="Search.."
        value={searchValue}
      />
      <Link className="SearchBar-link" to={`/search/${searchValue}`}>GO</Link>
    </div>
  );
}

export default SearchBar;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateMovies } from '../actions/movie-actions';

const handleEnter = async ({ e = {}, searchValue, setMovies }) => {
  if (e.keyCode === 13 || e.type === "click") {
    const response = await fetch("api/search", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movie: searchValue })
    })
    const data = await response.json()
    setMovies(data.results);
  }
}

const SearchBar = ({ setMovies }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <input 
        onChange={event => setSearchValue(event.target.value)}
        onKeyDown={e => handleEnter({ e, searchValue, setMovies })}
        type="text"
        placeholder="Search.."
        value={searchValue}
      />
      <button onClick={e => handleEnter({ e, searchValue, setMovies })}>go</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(updateMovies(movies))
});

export default connect(null, mapDispatchToProps)(SearchBar);
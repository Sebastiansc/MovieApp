import React, { useEffect, useState } from "react";

import MovieList from "./movie-list";

const SearchResults = ({ match: { params: { movie } } }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/search?movie=${movie}`)
      const data = await response.json();
      setMovies(data.results)
    }

    fetchData();
  }, [movie]);

  return (
    <MovieList movies={movies} />
  );
}

export default SearchResults;
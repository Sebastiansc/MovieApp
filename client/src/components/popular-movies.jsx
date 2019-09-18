import React, { useEffect, useState, Fragment } from "react";

import MovieList from "./movie-list";
import "../styles/popular-movies.css";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/popular-movies")
      const data = await response.json();
      setMovies(data.results)
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <h1 className="PopularMovies-title">Popular movies</h1>
      <MovieList movies={movies}/>
    </Fragment>
  );
}

export default PopularMovies
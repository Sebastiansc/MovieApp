import React, { useState, useEffect, Fragment } from 'react';

import MovieListItem from './movie-list-item';
import { usePrevious } from "../hooks";
import "../styles/movie-details.css";

const handleOnClick = async (movieId, setMovies) => {
  const response = await fetch(`/api/movie-recommendations?movieId=${movieId}`);
  const data = await response.json();
  setMovies(data.results);
}
const RecommendedMovies = ({ movieId }) => {
  const [movies, setMovies] = useState([]);
  const previousMovieId = usePrevious(movieId);

  // Reset movies when viewing a new movieID (stale recommendations)
  useEffect(() => {
    if (previousMovieId && previousMovieId !== movieId) {
      setMovies([]);
    }
  }, [previousMovieId, movieId]);

  if (!movieId) {
    return null;
  }

  return (
    <Fragment>
      <button className="RecommendedMovies" onClick={() => handleOnClick(movieId, setMovies)}>
        Show recommended movies based on this title
      </button>
      {movies.map(movie => <MovieListItem key={movie.id} {...movie} />)}
    </Fragment>
  );
}


export default RecommendedMovies;
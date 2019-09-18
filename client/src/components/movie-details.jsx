import React, { useEffect, useState } from 'react';

import MovieListItem from "./movie-list-item";
import RecommendedMovies from "./recommended-movies";
import "../styles/movie-details.css";

const MovieDetails = ({ match: { params: { movieId } } }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchInitialData() {
      const response = await fetch(`/api/movie-details?movieId=${movieId}`);
      const data = await response.json();
      setMovie(data);
    }

    fetchInitialData();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { 
    genres = [],
    release_date: releaseDate,
    revenue,
    runtime
  } = movie;
  return (
    <div className="MovieDetails">
      <div className="MovieDetails-genres">
        <span>Genres: </span>
        {genres.map(({ name }) => <span key={name} className="MovieDetails-genre">{name}</span> )}
      </div>
      <MovieListItem {...movie}/>
      <div className="MovieDetails-bottomContent">
        <p>Release date: {releaseDate}</p>
        <p>Duration: {runtime} minutes</p>
        <p>Movie grossed ${revenue}</p>
      </div>
      <RecommendedMovies movieId={movie.id}/>
    </div>
  );
}

export default MovieDetails;
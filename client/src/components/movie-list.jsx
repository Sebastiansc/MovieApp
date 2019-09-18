import React from 'react';

import MovieListItem from './movie-list-item';

const MovieList = ({ movies = [] }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <ul>
      {movies.map(movie => <MovieListItem key={movie.id} {...movie} />)}
    </ul>
  );
}

export default MovieList;
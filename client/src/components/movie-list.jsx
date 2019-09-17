import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MovieListItem from './movie-list-item';
import { updateMovies } from '../actions/movie-actions';

const MovieList = ({ movies = [], setMovies }) => {
  useEffect(() => {
    async function fetchInitialData() {
      const response = await fetch("api/popularMovies");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchInitialData();
  }, []);

  return (
    <ul>
      {movies.map(movie => <MovieListItem key={movie.id} {...movie} />)}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(updateMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import movieReducer from './movie-reducer';

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer
});

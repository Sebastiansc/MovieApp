import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.css';
import Header from './components/header';
import MovieDetails from './components/movie-details';
import PopularMovies from './components/popular-movies';
import SearchResults from './components/search-results';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const Routes = () => {
  return (
    <Fragment>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={PopularMovies}/>
      <Route path='/search/:movie' component={SearchResults}/>
      <Route path='/movie-details/:movieId' component={MovieDetails}/>
    </Fragment>
  );
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

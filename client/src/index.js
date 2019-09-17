import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import MovieDetails from './components/movie-details';
import MovieList from './components/movie-list';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const Root = () => {
  return (
    <Fragment>
      <Route path='/' component={App}/>
      <Route exact path='/' component={MovieList}/>
      <Route path='/movie-details/:movieId' component={MovieDetails}/>
    </Fragment>
  );
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

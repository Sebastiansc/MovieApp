import React from 'react';
import SearchBar from 'components/search-bar';
import MovieList from 'components/movie-list';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <MovieList />
      </header>
    </div>
  );
}

export default App;

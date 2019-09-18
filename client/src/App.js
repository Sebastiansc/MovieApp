import React from 'react';
import SearchBar from './components/search-bar';
import { Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <Link className="App-homeLink" to="/">Home</Link>
      </header>
    </div>
  );
}

export default App;

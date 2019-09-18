import React from 'react';
import SearchBar from './search-bar';
import { Link } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
  return (
    <header className="Header">
      <SearchBar/>
      <Link className="Header-homeLink" to="/">Home</Link>
    </header>
  );
}

export default Header;

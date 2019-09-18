import React from 'react';
import { Link } from "react-router-dom";

import '../styles/movie-list-item.css';

const MovieListItem = ({
  vote_average: voteAverage,
  vote_count: voteCount,
  backdrop_path: backdropPath,
  id,
  title,
  overview
}) => {
  if(!title || !backdropPath) {
    return null;
  }

  return (
    <li className="MovieListItem">
      <div className="MovieListItem-rightColumn">
        <Link className="MovieListItem-link" to={`/movie-details/${id}`}>
          <img alt={title} src={`https://image.tmdb.org/t/p/w200/${backdropPath}`}></img>
        </Link>
        <div className="MovieListItem-rating">
          <span className="MovieListItem-rating-score">{voteAverage}</span>
          <span className="MovieListItem-rating-votes"> from {voteCount} votes</span>
        </div>
      </div>
      <div className="MovieListItem-leftColumn">
        <p className="MovieListItem-title">{title}</p>
        <span className="MovieListItem-overview">{overview}</span>
      </div>
    </li>
  );
}

export default MovieListItem;
import React from 'react';

const MovieListItem = ({
  vote_average: voteAverage,
  vote_count: voteCount,
  backdrop_path: backdropPath,
  id,
  title,
  overview
}) => {
  if(!title) {
    return null;
  }

  return (
    <li className="MovieListItem">
      <a className="MovieListItem-link" href={`/movie-details/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w200/${backdropPath}`}></img>
      </a>
      <span className="MovieListItem-title">{title}</span>
      <span className="MovieListItem-overview">{overview}</span>
      <div className="MovieListItem-rating">
        <span className="MovieListItem-rating-votes">{voteCount}</span>
        <span className="MovieListItem-rating-score">{voteAverage}</span>
      </div>
    </li>
  );
}

export default MovieListItem;
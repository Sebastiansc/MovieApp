import React from 'react';

const MovieDetails = (props) => {
  return (
    <li className="MovieDetails">
      <span className="MovieDetails-title"></span>
      <span className="MovieDetails-overview"></span>
      <div className="MovieDetails-rating">
        <span className="MovieDetails-rating-votes"></span>
        <span className="MovieDetails-rating-score"></span>
      </div>
    </li>
  );
}

export default MovieDetails;
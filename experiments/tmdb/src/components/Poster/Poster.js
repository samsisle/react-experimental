import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatTitle from '../../lib/formatTitle';

import css from './Poster.module.css';

export default function Poster(props) {
  const navigate = useNavigate();

  function navigateToMoviePage() {
    navigate(`/${props.movieId}/${formatTitle(props.title)}`);
  }

  return (
    <li>
      {props.posterPath ? (
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w342${props.posterPath}`}
          alt={props.title}
          onClick={navigateToMoviePage}
        />
      ) : (
        <div className={css.poster} onClick={navigateToMoviePage}>
          <h4 className={css.title}>
            {props.title} ({props.releaseYear})
          </h4>
        </div>
      )}
    </li>
  );
}

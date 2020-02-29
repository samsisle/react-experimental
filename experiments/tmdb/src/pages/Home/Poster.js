import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from './css/Poster.module.css';

export default function Poster(props) {
  const navigate = useNavigate();

  function navigateToMoviePage() {
    navigate(`/${props.movieId}/${formatTitle(props.title)}`);
  }

  function formatTitle(s) {
    const formattedTitle = s.toLowerCase().replace(/\W+/g, '_');
    // Some movie titles end in parentheses. For example,
    // Birds of Prey (And the Fantabulous Emancipation of One Harley Quinn)
    if (formattedTitle.charAt(formattedTitle.length - 1) === '_') {
      return formattedTitle.slice(0, -1);
    } else {
      return formattedTitle;
    }
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

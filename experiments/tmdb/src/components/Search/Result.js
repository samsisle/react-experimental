import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatTitle from '../../lib/formatTitle';

import css from './Result.module.css';

export default function Result(props) {
  const navigate = useNavigate();

  function navigateToMoviePage() {
    props.setSearch('');
    props.set(false);
    props.setResults([]);
    navigate(`/${props.movieId}/${formatTitle(props.title)}`);
  }

  return (
    <li className={css.result} onClick={navigateToMoviePage}>
      <div>{props.title}</div>
    </li>
  );
}

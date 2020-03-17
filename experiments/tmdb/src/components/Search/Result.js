import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatTitle from '../../lib/formatTitle';

import css from './Result.module.css';

export default function Result(props) {
  const navigate = useNavigate();

  const { id, title } = props.result;

  function navigateToMoviePage() {
    props.set(false);
    props.setSearch('');
    props.setResults([]);
    navigate(`/${id}/${formatTitle(title)}`);
  }

  return (
    <li className={css.result} onClick={navigateToMoviePage}>
      <div className={css.title}>{title}</div>
    </li>
  );
}

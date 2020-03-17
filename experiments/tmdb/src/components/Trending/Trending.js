import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

import formatTitle from '../../lib/formatTitle';

import css from './Trending.module.css';

export default function Trending(props) {
  const navigate = useNavigate();

  const { data: trending } = useSwr(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      suspense: true
    }
  );

  function navigateToMoviePage(id, title) {
    return () => {
      props.set(false);
      props.setSearch('');
      props.setResults([]);
      navigate(`/${id}/${formatTitle(title)}`);
    };
  }

  return (
    <>
      <div className={css.trending}>Trending</div>
      {trending.results.slice(0, 7).map(result => (
        <li
          key={result.id}
          className={css.result}
          onClick={navigateToMoviePage(result.id, result.title)}
        >
          <div className={css.title}>{result.title}</div>
        </li>
      ))}
    </>
  );
}

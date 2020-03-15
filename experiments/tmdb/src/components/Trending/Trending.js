import React from 'react';
import useSwr from 'swr';

import css from './Trending.module.css';

export default function Trending() {
  const { data: trending } = useSwr(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      suspense: true
    }
  );

  return (
    <>
      <div className={css.trending}>Trending</div>
      {trending.results.slice(0, 7).map(result => (
        <li>{result.title}</li>
      ))}
    </>
  );
}

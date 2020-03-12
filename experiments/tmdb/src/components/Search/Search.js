import React, { useState, useEffect, useRef } from 'react';

import SearchIcon from './SearchIcon';
import Result from './Result';

import fetch from '../../lib/fetch';

import css from './Search.module.css';

export default function Search() {
  const [toggle, set] = useState(false);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);

  const expandClassName = `${toggle ? ' ' : ''}${toggle ? css.expand : ''}`;
  const borderClassName = `${toggle ? ' ' : ''}${toggle ? css.border : ''}`;
  const visibleClassName = `${toggle ? ' ' : ''}${toggle ? css.visible : ''}`;

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        set(true);
      } else {
        set(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    async function fetchSearch(query) {
      const encodedQuery = query.replace(' ', '%20');
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?language=en-US&query=${encodedQuery}&page=1&include_adult=false&region=US`
      );

      if (data.results.length > 5) {
        setResults(data.results.slice(0, 5));
      } else {
        setResults(data.results);
      }
    }

    if (search.length > 0) {
      fetchSearch(search);
    }
  }, [search]);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={`${css.container}${expandClassName}`} ref={containerRef}>
      <div className={`${css.search}${borderClassName}`}>
        <div className={css.icon}>
          <SearchIcon />
        </div>
        <input
          className={css.input}
          onChange={handleSearchChange}
          placeholder="Search TMDb..."
          value={search}
        />
      </div>
      <div className={`${css.results}${visibleClassName}`}>
        {results.length > 0 && (
          <ul>
            {results.map(result => (
              <Result
                key={result.id}
                movieId={result.id}
                title={result.title}
                set={set}
                setSearch={setSearch}
                setResults={setResults}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

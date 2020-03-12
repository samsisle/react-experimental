import React, { useState, useEffect, useRef } from 'react';

import SearchIcon from './SearchIcon';

import fetch from '../../lib/fetch';

import css from './Search.module.css';

export default function Search() {
  const [toggle, set] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);

  const expandClassName = `${toggle ? ' ' : ''}${toggle ? css.expand : ''}`;
  const borderClassName = `${toggle ? ' ' : ''}${toggle ? css.border : ''}`;
  const visibleClassName = `${toggle ? ' ' : ''}${toggle ? css.visible : ''}`;

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && searchRef.current.contains(e.target)) {
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
  }, [searchRef]);

  useEffect(() => {
    async function fetchSearch(query) {
      const encodedQuery = query.replace(' ', '%20');
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?language=en-US&query=${encodedQuery}&page=1&include_adult=false&region=US`
      );
    }

    if (search.length > 0) {
      fetchSearch(search);
    }
  }, [search]);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={`${css.container}${expandClassName}`}>
      <div className={`${css.search}${borderClassName}`} ref={searchRef}>
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
        <ul>
          <li>bruh!</li>
        </ul>
      </div>
    </div>
  );
}

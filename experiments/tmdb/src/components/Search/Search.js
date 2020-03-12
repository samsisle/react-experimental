import React, { useState, useEffect, useRef } from 'react';

import SearchIcon from './SearchIcon';

import fetch from '../../lib/fetch';

import css from './Search.module.css';

export default function Search() {
  const [toggle, set] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const expandClassName = `${toggle ? ' ' : ''}${toggle ? css.expand : ''}`;

  useEffect(() => {
    console.log('effect ran!');
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

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  // async function fetchSearch(query) {
  //   const encodedQuery = query.replace(' ', '%20');
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/search/movie?language=en-US&query=${encodedQuery}&page=1&include_adult=false&region=US`
  //   );
  // }

  // fetchSearch(search);

  return (
    <div className={`${css.container}${expandClassName}`} ref={containerRef}>
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
  );
}

import React, { useState } from 'react';

import css from './Search.module.css';

export default function Search() {
  const [search, setSearch] = useState('');

  function handleSearchChange() {}

  return (
    <div className={css.container}>
      <input className={css.input} placeholder="Search TMDb" />
    </div>
  );
}

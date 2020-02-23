import React, { Suspense } from 'react';

import PostersPlaceholder from './PostersPlaceholder';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';

import css from './css/Home.module.css';

export default function Home() {
  return (
    <main className={css.container}>
      <h2>Now Playing</h2>
      <div className="description">Movies now playing in theaters.</div>
      <Suspense fallback={<PostersPlaceholder />}>
        <NowPlaying />
      </Suspense>
      <h2>Upcoming</h2>
      <div className="description">Movies coming soon to theaters.</div>
      <Suspense fallback={<PostersPlaceholder />}>
        <Upcoming />
      </Suspense>
    </main>
  );
}

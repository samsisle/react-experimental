/**
 * See documentation on the next major version of React Router, version 6.
 *
 * Getting started guide:
 * https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md
 *
 * v5 to v6 migration guide:
 * https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md
 */

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Movie } from './pages';
import { Spinner } from './components/Spinner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path=":movieId/*" element={<Movie />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

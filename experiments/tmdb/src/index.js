/**
 * See documentation on Concurrent Mode, Strict Mode & SWRConfig below for more information:
 *
 * https://reactjs.org/docs/concurrent-mode-intro.html
 * https://reactjs.org/docs/strict-mode.html
 * https://github.com/zeit/swr
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';

import App from './App';

import fetch from './lib/fetch';
import * as serviceWorker from './lib/serviceWorker';

import './index.css';

// Opt-in concurrent mode with ReactDOM.createRoot
const rootEl = document.getElementById('app');
const root = ReactDOM.unstable_createRoot(rootEl);

root.render(
  <StrictMode>
    <SWRConfig
      value={{
        fetcher: fetch
      }}
    >
      <Router timeout={1000}>
        <App />
      </Router>
    </SWRConfig>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

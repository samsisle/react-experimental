import React from 'react';

import css from './PostersPlaceholder.module.css';

export default function PostersPlaceholder() {
  return (
    <div className={css.container}>
      <PosterPlaceholder />
      <PosterPlaceholder />
      <PosterPlaceholder />
      <PosterPlaceholder />
      <PosterPlaceholder />
      <PosterPlaceholder />
    </div>
  );
}

function PosterPlaceholder() {
  return (
    <div className={css.poster}>
      <svg aria-labelledby="b2z3bd2-aria" role="img" width="156" height="231">
        <title id="b2z3bd2-aria">Loading...</title>
        <rect
          role="presentation"
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#b2z3bd2-diff)"
          style={{ fill: 'url("#b2z3bd2-animated-diff")' }}
        ></rect>
        <defs role="presentation">
          <clipPath id="b2z3bd2-diff">
            <rect x="0" y="0" rx="5" ry="5" width="156" height="231"></rect>
          </clipPath>
          <linearGradient id="b2z3bd2-animated-diff">
            <stop offset="-2" stopColor="#f5f6f7" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="-1" stopColor="#eee" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="0" stopColor="#f5f6f7" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

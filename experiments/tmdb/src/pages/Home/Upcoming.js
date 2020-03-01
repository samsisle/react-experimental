import React from 'react';
import useSwr from 'swr';

import { Carousel } from '../../components/Carousel';
import { Poster } from '../../components/Poster';

export default function Upcoming() {
  const {
    data
  } = useSwr(
    'https://api.themoviedb.org/3/movie/upcoming?page=1&region=US&language=en-US',
    { suspense: true }
  );

  return (
    <Carousel top={99.5} left={6} right={16}>
      {data.results.map(movie => (
        <Poster
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          releaseYear={movie.release_date.slice(0, 4)}
        />
      ))}
    </Carousel>
  );
}

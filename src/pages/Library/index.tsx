import React from 'react';

import { MovieCard } from '../../components';

import movies from '../../temp';

import './index.scss';

export default () => {
  return (
    <div className="library">
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

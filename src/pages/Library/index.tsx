import React from 'react';

import { MovieCard } from '../../components';

import movies from '../../temp';

import './index.scss';

export default () => {
  return (
    <div className="library">
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

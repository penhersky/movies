import React from 'react';

import { MovieCard } from '../../components';

import movies from '../../temp';

import './index.scss';

export default () => {
  return (
    <div className="library">
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            title={movie.title}
            data={movie.realizeData}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

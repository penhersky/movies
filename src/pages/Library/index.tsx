import React from 'react';
import { useSelector } from 'react-redux';

import { MovieCard } from '../../components';

import './index.scss';

export default () => {
  const { movies } = useSelector((state: any) => state.movieReducer);

  return (
    <div className="library">
      <div className="movies-list">
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

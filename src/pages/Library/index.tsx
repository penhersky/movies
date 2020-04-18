import React from 'react';
import { useSelector } from 'react-redux';

import { MovieCard } from '../../components';

import './index.scss';

export default (props: any) => {
  const { movies } = useSelector((state: any) => state.movieReducer);

  return (
    <>
      <div className="library">
        <ul className="movies-list">
          {movies.map((movie: any) => (
            <div key={movie.id}>
              <MovieCard data={movie} />{' '}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

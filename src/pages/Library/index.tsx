import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Loading } from '../../components';

import './index.scss';

const Movie = lazy(() => import('../../components/MovieCard/MovieCard'));

export default (props: any) => {
  const { movies } = useSelector((state: any) => state.movieReducer);

  return (
    <Suspense fallback={<Loading />}>
      <div className="library padding-top">
        <ul className="movies-list">
          {movies.map((movie: any) => (
            <div key={movie.id}>
              <Movie data={movie} />{' '}
            </div>
          ))}
        </ul>
      </div>
    </Suspense>
  );
};

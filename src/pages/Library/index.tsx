import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Loading, Pagination } from '../../components';
import { Parallax, Message } from '../../fragments';

import image from '../../image/library.jpg';

import './index.scss';

const Movie = lazy(() => import('../../components/MovieCard/MovieCard'));

type Props = {
  newPage: (page: number) => void;
  activePage?: number;
  countPage?: number;
  error?: boolean;
};

export default (props: Props) => {
  document.title = `Space movies/Library/${props.activePage}`;
  const { movies } = useSelector((state: any) => state.movieReducer);
  return (
    <>
      <div>
        <Parallax img={image} title="Library" opacity={0.5} />
      </div>
      <Suspense fallback={<Loading />}>
        <div className="library">
          {props.error ? (
            <Message
              title="Load movie list error!"
              type="error"
              body="Please reload this page."
              style={{ height: '50vh' }}
            />
          ) : (
            <ul className="movies-list">
              {movies.map((movie: any) => (
                <div key={movie.id}>
                  <Movie data={movie} />
                </div>
              ))}
            </ul>
          )}
        </div>
        <Pagination {...props} />
      </Suspense>
    </>
  );
};

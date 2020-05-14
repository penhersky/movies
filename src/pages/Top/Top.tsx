import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Parallax, Message } from '../../fragments';

import img from '../../image/top.jpg';
import { Loading, Pagination, MovieCard as Movie } from '../../components';

type Props = {
  newPage: (page: number) => void;
  activePage?: number;
  countPage?: number;
  error?: boolean;
};

export default (props: Props) => {
  const { topMovies } = useSelector((state: any) => state.movieReducer);

  return (
    <div className="top-movies">
      <Parallax title="top 100 movies" img={img} opacity={0.6} />
      <Suspense fallback={<Loading />}>
        <div className="library">
          <ul className="movies-list">
            {props.error ? (
              <Message
                title="Load movie list error!"
                type="error"
                body="Please reload this page."
                style={{ height: '50vh' }}
              />
            ) : (
              topMovies.map((movie: any) => (
                <div key={movie.id}>
                  <Movie data={movie} />
                </div>
              ))
            )}
          </ul>
        </div>
        <Pagination {...props} />
      </Suspense>
    </div>
  );
};

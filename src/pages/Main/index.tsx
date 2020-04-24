import React from 'react';
import { useSelector } from 'react-redux';

import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import { MovieCard } from '../../components';

import './main.scss';

export default () => {
  const { newMovies } = useSelector((state: any) => state.movieReducer);
  console.log(newMovies);

  return (
    <div className="main">
      <div id="parallax">
        <h1>Movies</h1>
      </div>
      <div className="main-body">
        <div className="main-new-movies">
          <div className="arrow left">
            <ChevronLeft style={{ fontSize: '80px' }} />
          </div>
          <div className="new-movies-list">
            {newMovies.map((movie: any) => (
              <div className="card" key={movie.id}>
                <MovieCard data={movie} />
              </div>
            ))}
          </div>
          <div className="arrow right">
            <ChevronRight style={{ fontSize: '80px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

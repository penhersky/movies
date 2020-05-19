import React from 'react';
import { useSelector } from 'react-redux';

import { Parallax } from '../../fragments';

import img from '../../image/top.jpg';
import { Pagination, MovieList } from '../../components';

import { Page } from '../../types/props';
export default (props: Page) => {
  document.title = `Space movies | TOP | ${props.activePage}`;
  const { topMovies } = useSelector((state: any) => state.movieReducer);

  return (
    <>
      <Parallax title='top 100 movies' img={img} opacity={0.6} />
      <div className='content'>
        <MovieList movies={topMovies} error={props.error} />
        <Pagination {...props} />
      </div>
    </>
  );
};

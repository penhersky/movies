import React from 'react';
import { useSelector } from 'react-redux';

import { MovieList, Pagination } from '../../components';
import { Parallax } from '../../fragments';

import image from '../../image/library.jpg';

import { Page } from '../../types/props';

import './index.scss';

export default (props: Page) => {
  document.title = `Space movies | Library | ${props.activePage}`;
  const { movies } = useSelector((state: any) => state.movieReducer);

  return (
    <>
      <div>
        <Parallax img={image} title='Library' opacity={0.5} />
      </div>
      <div className='content'>
        <MovieList movies={movies} error={props.error} />
        <Pagination {...props} />
      </div>
    </>
  );
};

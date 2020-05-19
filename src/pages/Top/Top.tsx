import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Pagination, MovieList } from '../../components';
import { Parallax, Spinner } from '../../fragments';

import { topMovie } from '../../utils/createUrl';
import { initialState } from '../../utils/api';
import { useLazyFetch } from '../../hooks';

import { SET_TOP100_MOVIES } from '../../types/movie';

import img from '../../image/top.jpg';

import { Page } from '../../types/props';
export default (props: Page) => {
  const [page, setPage] = useState(1);
  document.title = `Space movies | TOP | ${props.activePage}`;

  const dispatch = useDispatch();

  const { topMovies } = useSelector((state: any) => state.movieReducer);
  const [fetchData, data, loading, error] = useLazyFetch(initialState);

  useEffect(() => {
    if (data.results.length === 0) return;
    dispatch({ type: SET_TOP100_MOVIES, topMovies: data.results });
  }, [data.results, dispatch]);

  const getPage = (page: number) => {
    setPage(page);
    fetchData(topMovie(page), 'GET');
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <Parallax title='top 100 movies' img={img} opacity={0.6} />
      <div className='content'>
        <MovieList movies={topMovies} error={props.error || error} />
        <Pagination activePage={page} countPage={5} newPage={getPage} />
      </div>
    </>
  );
};

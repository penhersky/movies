import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MovieList, Pagination } from '../../components';
import { Parallax, Spinner } from '../../fragments';

import { libraryUrl } from '../../utils/createUrl';
import { initialState } from '../../utils/api';
import { useLazyFetch } from '../../hooks';

import { SET_MOVIES, SET_ACTIVE_PAGE, SET_COUNT_PAGE } from '../../types/movie';

import image from '../../image/library.jpg';

import './index.scss';

export default (props: { error: boolean }) => {
  const { movies, activePage, countPages } = useSelector(
    (state: any) => state.movieReducer,
  );
  document.title = `Space movies | Library | ${activePage}`;

  const dispatch = useDispatch();

  const [fetchData, data, loading, error] = useLazyFetch({
    ...initialState,
    total_pages: countPages,
  });

  useEffect(() => {
    if (data.results.length === 0) return;
    dispatch({ type: SET_MOVIES, movies: data.results });
  }, [data.results, dispatch]);

  useEffect(() => {
    if (countPages !== data.total_pages) {
      dispatch({ type: SET_COUNT_PAGE, countPages: data.total_pages });
    }
  }, [data.total_pages, countPages, dispatch]);

  const getPage = (page: number) => {
    dispatch({ type: SET_ACTIVE_PAGE, activePage: page });
    fetchData(
      libraryUrl(
        page,
        '&language=en-US&sort_by=primary_release_date.desc&primary_release_date.lte=now&vote_count.gte=10',
      ),
      'GET',
    );
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <div>
        <Parallax img={image} title='Library' opacity={0.5} />
      </div>
      <div className='content'>
        <MovieList movies={movies} error={props.error || error} />
        <Pagination
          activePage={activePage}
          countPage={countPages}
          newPage={getPage}
        />
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MovieList, Pagination, Loading } from '../../components';
import { Parallax } from '../../fragments';

import { libraryUrl } from '../../utils/createUrl';
import { initialState } from '../../utils/api';
import { useLazyFetch } from '../../hooks';

import { SET_MOVIES } from '../../types/movie';

import image from '../../image/library.jpg';

import './index.scss';

export default (props: { error: boolean }) => {
  const [pages, setPages] = useState({ countPage: 50, activePage: 1 });
  document.title = `Space movies | Library | ${pages.activePage}`;

  const dispatch = useDispatch();

  const [fetchData, data, loading, error] = useLazyFetch(initialState);
  const { movies } = useSelector((state: any) => state.movieReducer);

  useEffect(() => {
    if (data.results.length === 0) return;
    dispatch({ type: SET_MOVIES, movies: data.results });
  }, [data.results, dispatch]);

  const getPage = (page: number) => {
    setPages((pf: any) => ({
      activePage: page,
      countPage: pf.countPage,
    }));
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
      {loading ? <Loading /> : null}
      <div>
        <Parallax img={image} title='Library' opacity={0.5} />
      </div>
      <div className='content'>
        <MovieList movies={movies} error={props.error || error} />
        <Pagination {...pages} newPage={getPage} />
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';

import { Main, Library, MoviePage, Top, SearchMoviesPage } from '../../pages';
import { Header, Loading, Footer } from '../../components';
import { ScrollTop } from '../../fragments';
import Page404 from '../404';

import { useFetch } from '../../hooks';

import {
  SET_MOVIES,
  SET_NEW_MOVIES,
  SET_TOP100_MOVIES,
} from '../../types/movie';

import { defaultLibrary, topMovie } from '../../utils/createUrl';

import { initialState } from '../../utils/api';

export default () => {
  const [TopPages, setTopPages] = useState({ countPage: 5, activePage: 1 });
  const dispatch = useDispatch();

  const [data, loading, error] = useFetch(defaultLibrary(1), initialState);

  const [topData, topLoading, topError, setTopUrl] = useFetch(
    topMovie(1),
    initialState,
  );

  // library /*
  useEffect(() => {
    if (data.results.length === 0) return;
    dispatch({ type: SET_MOVIES, movies: data.results });
  }, [dispatch, data]);

  useEffect(() => {
    if (data.results.length === 0) return;
    dispatch({
      type: SET_NEW_MOVIES,
      newMovies: data.results.slice(0, 10),
    });
  }, [data.results, dispatch]);
  // */

  // top /*
  useEffect(() => {
    if (topData.results.length === 0) return;
    dispatch({ type: SET_TOP100_MOVIES, topMovies: topData.results });
  }, [dispatch, topData]);

  const getTopPage = (page: number) => {
    setTopPages((state: any) => ({
      countPage: state.countPage,
      activePage: page,
    }));
  };

  useEffect(() => {
    setTopUrl(topMovie(TopPages.activePage));
  }, [TopPages.activePage, setTopUrl]);
  // */

  const path = [
    '/',
    '/library',
    '/top',
    '/library/search',
    '/library/movie/:id',
  ];

  return (
    <>
      <Route exact path={path} component={Header} />
      {loading || topLoading ? <Loading /> : null}
      <Toolbar id='back-to-top-anchor' style={{ minHeight: 0 }} />
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <Main loading={loading || topLoading} error={error} />
          )}
        />
        <Route
          exact
          path={'/library'}
          component={() => <Library error={error} />}
        />

        <Route exact path={'/library/search'} component={SearchMoviesPage} />
        <Route exact path='/library/movie/:id' component={MoviePage} />

        <Route
          exact
          path='/top'
          component={() => (
            <Top newPage={getTopPage} error={topError} {...TopPages} />
          )}
        />
        <Route path='*' component={Page404} />
      </Switch>
      <Route exact path={path} component={Footer} />
      <ScrollTop window={() => window} />
    </>
  );
};

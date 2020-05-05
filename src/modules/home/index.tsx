import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';

import { Main, Library, MoviePage, Top } from '../../pages';
import { Header } from '../../components';
import { ScrollTop } from '../../fragments';
import Page404 from '../404';

import { SET_MOVIES, SET_NEW_MOVIES, SET_TOP100_MOVIES } from '../../types/movie';

// temp
import Movies from '../../temp';

export default () => {
  const [pages, setPages] = useState({ countPage: 40, activePage: 1 });
  const [TopPages, setTopPages] = useState({ countPage: 20, activePage: 1 });
  const dispatch = useDispatch();
  /*
    useQuery()
  */

  useEffect(() => {
    dispatch({ type: SET_MOVIES, movies: Movies });
    dispatch({ type: SET_TOP100_MOVIES, topMovies: Movies });
    dispatch({ type: SET_NEW_MOVIES, newMovies: Movies.slice(0, 8) });
  }, [dispatch]);

  // Library
  const getPage = (page: number) => {
    setPages({ activePage: page, countPage: 40 });
  };

  // top
  const getTopPage = (page: number) => {
    setTopPages({ activePage: page, countPage: 20 });
  };

  return (
    <>
      <Route path={['/', '/library', '/top']} component={Header} />
      <Toolbar id="back-to-top-anchor" style={{ minHeight: 0 }} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          exact
          path={'/library'}
          component={() => <Library newPage={getPage} {...pages} />}
        />
        <Route exact path="/library/movie/:id" component={MoviePage} />
        <Route
          exact
          path="/top"
          component={() => <Top newPage={getTopPage} {...TopPages} />}
        />
        <Route path="*" component={Page404} />
      </Switch>
      <ScrollTop window={() => window} />
    </>
  );
};

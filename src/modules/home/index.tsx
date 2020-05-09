import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';

import { Main, Library, MoviePage, Top } from '../../pages';
import { Header, Loading } from '../../components';
import { ScrollTop } from '../../fragments';
import Page404 from '../404';

import { useFetch } from '../../hooks';

import {
  SET_MOVIES,
  SET_NEW_MOVIES,
  SET_TOP100_MOVIES,
} from '../../types/movie';

import { defaultLibrary } from '../../utils/createUrl';

import Movies from '../../temp';

const initialState = {
  dates: [],
  pages: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export default () => {
  const [pages, setPages] = useState({ countPage: 50, activePage: 1 });
  const [TopPages, setTopPages] = useState({ countPage: 5, activePage: 1 });
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const dispatch = useDispatch();
  /*
    useQuery()
  */
  //  *library
  const [data, loading, error, setURL] = useFetch(
    defaultLibrary(pages.activePage),
    initialState,
  );

  useEffect(() => {
    if (data) {
      setPages((state) => ({
        countPage: data.total_pages,
        activePage: state.activePage,
      }));
      setMovies(data.results);
      setNewMovies(data.results.slice(0, 10));
    }
  }, [data, error]);

  useEffect(() => {
    setURL(defaultLibrary(pages.activePage));
  }, [pages, setURL]);

  useEffect(() => {
    dispatch({ type: SET_MOVIES, movies: movies });
    dispatch({ type: SET_TOP100_MOVIES, topMovies: Movies });
    dispatch({ type: SET_NEW_MOVIES, newMovies });
  }, [dispatch, movies, newMovies]);

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
      {loading ? <Loading /> : null}
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

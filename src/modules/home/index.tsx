import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';

import { Main, Library, MoviePage } from '../../pages';
import { Header } from '../../components';
import { ScrollTop } from '../../fragments';
import Page404 from '../404';

import { SET_MOVIES, SET_NEW_MOVIES } from '../../types/movie';

// temp
import Movies from '../../temp';

export default () => {
  const dispatch = useDispatch();
  /*
    useQuery()
  */

  dispatch({ type: SET_MOVIES, movies: Movies });
  dispatch({ type: SET_NEW_MOVIES, newMovies: Movies.slice(0, 8) });

  return (
    <>
      <Route path={['/', '/library', '/top']} component={Header} />
      <Toolbar id="back-to-top-anchor" style={{ minHeight: 0 }} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/library" component={() => <Library />} />
        <Route exact path="/library/movie/:id" component={MoviePage} />
        <Route path="*" component={Page404} />
      </Switch>
      <ScrollTop window={() => window} />
    </>
  );
};

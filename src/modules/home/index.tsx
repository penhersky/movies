import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

import { Main, Library, MoviePage } from '../../pages';
import { Header } from '../../components';
import { ScrollTop } from '../../fragments';
import Page404 from '../404';

export default () => {
  return (
    <div>
      <Route path={['/', '/library', '/top']} component={Header} window={() => window} />
      <Toolbar id="back-to-top-anchor" />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/library/movie/:id" component={MoviePage} />
        <Route path="*" component={Page404} />
      </Switch>
      <ScrollTop window={() => window} />
    </div>
  );
};

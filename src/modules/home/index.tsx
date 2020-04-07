import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, Library } from '../../pages';
import Page404 from '../404';

export default () => {
  return (
    <div className="home">
      Home
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/library" component={Library} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

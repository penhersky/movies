import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, Library } from '../../pages';
import { SideBar } from '../../components';
import Page404 from '../404';

export default () => {
  return (
    <div className="home" style={{ height: '1200px' }}>
      <Route path={['/', '/library', '/top']} component={SideBar} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/library" component={Library} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

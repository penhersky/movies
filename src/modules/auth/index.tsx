import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from '../../pages';
import page404 from '../404';

export default () => {
  return (
    <div className="auth">
      <Switch>
        <Route path="/account/login" component={Login} />
        <Route path="*" component={page404} />
      </Switch>
    </div>
  );
};

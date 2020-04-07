import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Home from './modules/home';
import Auth from './modules/auth';

export default () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/account" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

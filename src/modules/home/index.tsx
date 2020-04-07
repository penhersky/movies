import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../../pages';

export default () => {
  return (
    <div className="home">
      Home
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

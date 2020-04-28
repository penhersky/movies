import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './index.scss';

export default () => {
  document.title = '404 Error';
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page not found!</p>
      <Button variant="contained" color="primary">
        <NavLink to="/" className="link-404">
          Go main
        </NavLink>
      </Button>
    </div>
  );
};

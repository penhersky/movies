import React from 'react';
import { Button } from '@material-ui/core';

import { AuthForm } from '../../components';

import './login.scss';

export default () => {
  return (
    <AuthForm>
      <h1>Log in</h1>
      <Button variant="contained" type="submit">
        LOG IN
      </Button>
    </AuthForm>
  );
};

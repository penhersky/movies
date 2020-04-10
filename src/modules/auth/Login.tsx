import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import { AuthForm } from '../../components';
import { Link } from '../../fragments';

import './auth.scss';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const onChangeEmail = (e: any) => setEmail(e.target.value);
  const onChangePassword = (e: any) => setPassword(e.target.value);

  const subminForm = (e: any) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
    }
    setPassword('');
  };

  return (
    <AuthForm Submit={subminForm}>
      <h1>Log in</h1>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        error={errorEmail}
        value={email}
        onChange={onChangeEmail}
        className="auth-input"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        error={errorPassword}
        onChange={onChangePassword}
        value={password}
        className="auth-input"
        type="password"
      />
      <Button variant="contained" type="submit" className="auth-button">
        LOG IN
      </Button>
      <Link to="/account/register" title="Create an account" />
      <Link to="/account/forgotPass" title="Forgot password" />
    </AuthForm>
  );
};

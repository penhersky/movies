import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { AuthForm } from '../../components';
import { Link } from '../../fragments';

import './auth.scss';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({ password: '', passwordRepeat: '' });
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('ghhjkl');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorUserName, setErrorUserName] = useState(false);

  const onChangeUserName = (e: any) => setUserName(e.target.value);
  const onChangeEmail = (e: any) => setEmail(e.target.value);
  const onChangePassword = (e: any) =>
    setPassword({ password: e.target.value, passwordRepeat: '' });
  const onChangePasswordRepeat = (e: any) =>
    setPassword({ passwordRepeat: e.target.value, password: '' });

  const subminForm = (e: any) => {
    e.preventDefault();

    console.log(userName, email, password);

    setPassword({ password: '', passwordRepeat: '' });
  };

  return (
    <AuthForm Submit={subminForm}>
      <h1>Account creation</h1>
      {error ? (
        <Alert style={{ marginBottom: '20px' }} variant="filled" severity="error">
          {error}
        </Alert>
      ) : (
        <></>
      )}
      <TextField
        label="User Name"
        variant="outlined"
        error={errorUserName}
        value={userName}
        onChange={onChangeUserName}
        className="auth-input"
      />
      <TextField
        label="Email"
        variant="outlined"
        error={errorEmail}
        value={email}
        onChange={onChangeEmail}
        className="auth-input"
      />
      <TextField
        label="Password"
        variant="outlined"
        error={errorPassword}
        onChange={onChangePassword}
        value={password.password}
        className="auth-input"
        type="password"
      />
      <TextField
        label="Repeat password"
        variant="outlined"
        error={errorPassword}
        onChange={onChangePasswordRepeat}
        value={password.passwordRepeat}
        className="auth-input"
        type="password"
      />
      <Button variant="contained" type="submit" className="auth-button">
        sign up
      </Button>
      <Link to="/account/login" title="Already have an account?" />
    </AuthForm>
  );
};

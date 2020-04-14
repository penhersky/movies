import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.scss';

import Home from './modules/home';
import Auth from './modules/auth';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9e9e9e',
      light: '#a2a4ca',
      dark: '#494f5d',
      contrastText: '#141414',
    },
    secondary: {
      main: '#546e7a',
      light: '#ff7961',
      dark: '#546e7aa8',
      contrastText: '#000',
    },
  },
});

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path="/account" component={Auth} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

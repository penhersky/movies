import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import './App.scss';

import Home from './modules/home';
import Auth from './modules/auth';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#03031d',
      light: '#a2a4ca',
      dark: '#494f5d',
      contrastText: '#546E7A',
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
      <SnackbarProvider maxSnack={3}>
        <div className='App'>
          <Switch>
            <Route path='/account' component={Auth} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

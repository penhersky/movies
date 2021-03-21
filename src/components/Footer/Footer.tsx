import React from 'react';
import { Typography } from '@material-ui/core';

import db from '../../image/db.svg';
import netlify from '../../image/netlify.png';
import logo from '../../image/logo.svg';

import './footer.scss';

export default () => {
  return (
    <footer>
      <div className='top'>
        <img src={db} alt='' className='img' />
        <img src={logo} alt='' className='img' style={{ height: 110 }} />
        <img src={netlify} alt='' className='img' />
      </div>
      <div className='center'>
        <a href='https://github.com/penhersky/movies'>repository</a>
      </div>

      <Typography className='alpha'>beta testing</Typography>
      <Typography>© {new Date().getFullYear()} Space Movies</Typography>
    </footer>
  );
};

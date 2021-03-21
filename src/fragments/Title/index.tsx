import React from 'react';
import { Typography } from '@material-ui/core';

import './style.scss';

const Title = ({ children }: { children: any }) => {
  return (
    <Typography variant='h6' className='g-title'>
      {children}
    </Typography>
  );
};

export default Title;

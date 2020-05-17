import React from 'react';

import db from '../../image/db.svg';

import './footer.scss';

export default () => {
  return (
    <div className='footer'>
      <img src={db} alt='' />
      <h5>Early access ( alpha )</h5>
    </div>
  );
};

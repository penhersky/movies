import React from 'react';

import db from '../../image/db.svg';

import './footer.scss';

export default () => {
  return (
    <div className='footer'>
      <img src={db} alt='' />
      <div className='contact-data'>
        <a href='https://penhersky.now.sh/' className='link'>
          Author
        </a>
        <a href='https://github.com/penhersky/movies' className='link'>
          Github
        </a>
      </div>
      <h5>Early access ( alpha )</h5>
    </div>
  );
};

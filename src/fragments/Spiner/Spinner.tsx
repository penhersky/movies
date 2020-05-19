import React, { CSSProperties } from 'react';

import './spinner.scss';

export default (props: { style?: CSSProperties }) => {
  return (
    <div className='spinner' style={props.style}>
      <div className='lds-dual-ring'></div>
    </div>
  );
};

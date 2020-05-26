import React from 'react';

import './icon-button.scss';

export default (props: { onClick: () => void; Icon: any }) => {
  return (
    <div onClick={props.onClick} className='icon-button'>
      <props.Icon style={{ fontSize: 25 }} />
    </div>
  );
};

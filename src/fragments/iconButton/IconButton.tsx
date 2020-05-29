import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

import './icon-button.scss';

export default (props: {
  onClick: () => void;
  Icon: any;
  tooltip?: string;
}) => {
  return (
    <div onClick={props.onClick} className='icon-button'>
      <Tooltip title={props.tooltip} interactive>
        <props.Icon style={{ fontSize: 25 }} />
      </Tooltip>
    </div>
  );
};

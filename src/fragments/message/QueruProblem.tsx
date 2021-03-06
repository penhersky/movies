import React, { CSSProperties } from 'react';
import { Typography } from '@material-ui/core';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

import './query.scss';

import { Message } from '../../types/Message';

export default (props: {
  title: string;
  body?: string;
  type?: Message;
  style?: CSSProperties;
}) => {
  const icon = (type: Message) => {
    switch (type) {
      case 'warning':
        return (
          <WarningIcon className='warning-message' style={{ fontSize: 50 }} />
        );
      case 'error':
        return (
          <ErrorOutlineIcon
            className='error-message'
            style={{ fontSize: 50 }}
          />
        );
      default:
        return <InfoIcon className='info-message' style={{ fontSize: 50 }} />;
    }
  };

  return (
    <div className='load-message' style={props.style}>
      <div className='message-content'></div>
      {icon(props.type)}
      <Typography variant='h5' style={{ margin: 10 }} className='message-title'>
        {props.title}
      </Typography>
      <h5 className='message-body'>{props.body}</h5>
    </div>
  );
};

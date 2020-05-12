import React, { CSSProperties } from 'react';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

import './query.scss';

type MsgType = 'error' | 'warning' | undefined;
export default (props: {
  title: string;
  body?: string;
  type?: MsgType;
  style?: CSSProperties;
}) => {
  const icon = (type: MsgType) => {
    switch (type) {
      case 'warning':
        return (
          <WarningIcon className="warning-message" style={{ fontSize: 50 }} />
        );
      case 'error':
        return (
          <ErrorOutlineIcon
            className="error-message"
            style={{ fontSize: 50 }}
          />
        );
      default:
        return <InfoIcon className="info-message" style={{ fontSize: 50 }} />;
    }
  };

  return (
    <div className="load-message" style={props.style}>
      <div className="message-content"></div>
      {icon(props.type)}
      <h4 className="message-title">{props.title}</h4>
      <h5 className="message-body">{props.body}</h5>
    </div>
  );
};

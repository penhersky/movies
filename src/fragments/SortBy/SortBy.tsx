import React from 'react';
import classnames from 'classnames';

import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';

import './sort-by.scss';

export default (props: {
  label: string;
  value: 'desc' | 'asc';
  isChecked: boolean;
  onChecked: (value: 'desc' | 'asc', type?: string) => void;
}) => {
  const onClick = () => {
    props.onChecked(props.value === 'desc' ? 'asc' : 'desc', props.label);
  };

  return (
    <div
      className={classnames('sort-by', props.isChecked ? 'sort-checked' : '')}
      onClick={onClick}
    >
      {props.value === 'desc' ? (
        <DownIcon
          style={{
            visibility: props.isChecked ? 'visible' : 'hidden',
          }}
        />
      ) : (
        <UpIcon
          style={{
            visibility: props.isChecked ? 'visible' : 'hidden',
          }}
        />
      )}
      <p>{props.label}</p>
    </div>
  );
};

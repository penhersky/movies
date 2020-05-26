import React from 'react';
import classnames from 'classnames';

import './check-box.scss';

export default (props: {
  index: string;
  label: string;
  isChecked: boolean;
  onChecked: (value: string) => void;
}) => {
  return (
    <div
      className={classnames(
        'radio-item',
        props.isChecked ? 'radio-checked' : '',
      )}
      onClick={() => props.onChecked(props.index)}
    >
      <span>{props.label}</span>
    </div>
  );
};

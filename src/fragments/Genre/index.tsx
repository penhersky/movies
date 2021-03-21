import React from 'react';
import classnames from 'classnames';

import './style.scss';

const Genre = (props: {
  index: string;
  label: string;
  isChecked: boolean;
  onChecked: (value: string) => void;
}) => {
  return (
    <div
      className={classnames(
        'genre-item',
        props.isChecked ? 'genre-checked' : '',
      )}
      onClick={() => props.onChecked(props.index)}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL
        }/genres/${props.label.replace(' ', '')}.jpg)`,
      }}
    >
      <div className='genre-fon'>
        <span className='genre-label'>{props.label}</span>
      </div>
    </div>
  );
};

export default Genre;

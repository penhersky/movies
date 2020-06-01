import React from 'react';

import { Checkbox } from '../';

import './radio-buttons.scss';

export default (props: {
  list: { id: number; name: string }[];
  value: number;
  onChange: (id: number) => void;
}) => {
  return (
    <div className='radio-list'>
      {props.list.map((item) => (
        <Checkbox
          key={item.id}
          isChecked={props.value === item.id}
          index={String(item.id)}
          onChecked={(value: string) => props.onChange(+value)}
          label={item.name}
        />
      ))}
    </div>
  );
};

import React from 'react';
import classnames from 'classnames';

import { Checkbox } from '../';

import './radio-buttons.scss';

export default (props: {
  list: { id: number; name: string }[];
  value: number;
  onChange: (value: number) => void;
  Checkbox?: any;
  className?: string;
}) => {
  return (
    <div className={classnames('radio-list', props.className)}>
      {props.Checkbox
        ? props.list.map((item) => (
            <props.Checkbox
              key={item.id}
              isChecked={props.value === item.id}
              index={String(item.id)}
              onChecked={(value: string) => props.onChange(+value)}
              label={item.name}
            />
          ))
        : props.list.map((item) => (
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

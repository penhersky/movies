import React from 'react';
import Slider from '@material-ui/core/Slider';

export default (props: {
  value: number[];
  marks?: { value: number; label: string }[];
  width?: number;
  onChange: (value: number[]) => void;
}) => {
  const handleChange = (event: any, newValue: number | number[]) => {
    props.onChange(newValue as number[]);
  };

  return (
    <div
      style={{
        width: props.width || 300,
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'column',
        alignItems: 'center',
        margin: '10px 0',
      }}
    >
      <Slider
        value={props.value}
        onChange={handleChange}
        color='secondary'
        marks={props.marks}
        min={0}
        max={10}
        step={1}
        valueLabelDisplay='auto'
        aria-labelledby='discrete-slider-small-steps'
        style={{ color: '#c0c0c0' }}
      />
    </div>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default (props: {
  value: number[];
  label: string;
  marks?: { value: number; label: string }[];
  onChange: (value: number[]) => void;
}) => {
  const classes = useStyles();

  const handleChange = (event: any, newValue: number | number[]) => {
    props.onChange(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Typography id='range-slider' color='secondary' gutterBottom>
        {props.label}
      </Typography>
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

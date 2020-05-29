import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

type Props = {
  label: string;
  handler: (value: string) => void;
  value: string;
  defaultValue: string;
  list: string[];
};

export default (props: Props) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.handler(event.target.value as string);
  };

  return (
    <>
      <FormControl
        variant='standard'
        color='secondary'
        className={classes.formControl}
      >
        <InputLabel id='demo-simple-select-outlined-label'>
          {props.label}
        </InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={props.value}
          onChange={handleChange}
          label={props.label}
        >
          <MenuItem value=''>
            <em>{props.defaultValue}</em>
          </MenuItem>
          {props.list.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

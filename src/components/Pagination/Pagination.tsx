import React from 'react';
import classnames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import './pagination.scss';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

type Props = {
  newPage: (page: number) => void;
  activePage?: number;
  countPage?: number;
};

export default (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, 'pagination-blok')}>
      <Pagination
        count={props.countPage}
        className='pagination'
        color='secondary'
        size='large'
        style={{ display: Number(props.countPage) <= 1 ? 'none' : 'flex' }}
        onChange={(_: any, value: number) => {
          props.newPage(value);
          window.scrollTo({ top: window.innerHeight / 3, behavior: 'smooth' });
        }}
        page={props.activePage}
        defaultPage={1}
        siblingCount={2}
        boundaryCount={1}
      />
    </div>
  );
};

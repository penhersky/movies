import React from 'react';
import { useHistory } from 'react-router';

import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import {} from '@material-ui/icons';

import './willWatch.scss';

export default ({
  open,
  onClose,
  willWatch,
}: {
  open: boolean;
  onClose: () => void;
  willWatch: any[];
}) => {
  const history = useHistory();

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <div className='will-dialog'>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent></DialogContent>
        </div>
      </Dialog>
    </>
  );
};

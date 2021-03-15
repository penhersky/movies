import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Card,
  Typography,
  CardActionArea,
  IconButton,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { DeleteForever, Close } from '@material-ui/icons';
import { useSnackbar } from 'notistack';

import { IMAGE_URL } from '../../utils/api';
import { DELETE_FROM_WILL_WATCH } from '../../types/movie';
import { ScrollArea, Message } from '../../fragments';

import altImage from '../../image/movieAlt.png';

import './willWatch.scss';

const Item = ({ item, onClose }: { item: any; onClose: () => any }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Card className='will-item-dialog'>
      <CardActionArea
        onClick={() => {
          history.push(`/library/movie/${item.id}`);
          onClose();
        }}
        className='item-content'
      >
        <img
          src={item.poster ? `${IMAGE_URL}w500${item.poster}` : altImage}
          alt={item.title}
        />
        <div className='will-content'>
          <Typography>{item.title}</Typography>
          <Rating
            size='small'
            name='half-rating-read'
            defaultValue={item.rating}
            className='rating-will'
            max={10}
            readOnly
          />
          <span>{item.realizeData}</span>
        </div>
      </CardActionArea>
      <IconButton
        onClick={() => {
          dispatch({ type: DELETE_FROM_WILL_WATCH, id: item.id });

          enqueueSnackbar(`Movie "${item.title}" deleted from Will watch`, {
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          });
        }}
      >
        <DeleteForever color='secondary' />
      </IconButton>
    </Card>
  );
};

export default ({
  open,
  onClose,
  willWatch,
}: {
  open: boolean;
  onClose: () => void;
  willWatch: any[];
}) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <div className='will-dialog'>
          <DialogTitle>{'List of saved movies'}</DialogTitle>
          <IconButton onClick={onClose} className='close-icon'>
            <Close color='secondary' />
          </IconButton>
          <DialogContent>
            <ScrollArea height={500}>
              <div className='content-will'>
                {willWatch.length ? (
                  <div className='list'>
                    {willWatch.map((item) => (
                      <Item key={item.id} item={item} onClose={onClose} />
                    ))}
                  </div>
                ) : (
                  <Message title='You have no saved movies' />
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

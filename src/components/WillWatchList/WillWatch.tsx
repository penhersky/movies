import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useSnackbar } from 'notistack';

import { WillWatch } from '../../reducers/willWatch';
import { DELETE_FROM_WILL_WATCH } from '../../types/movie';
import { ScrollArea } from '../../fragments';

import './will-watch.scss';

export default (props: { WillWatch: WillWatch[] }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <ScrollArea>
      <List>
        {props.WillWatch.map((movie: WillWatch, index: number) => (
          <ListItem button className="watch-item" key={index} style={{ padding: '3px' }}>
            <ListItemIcon
              onClick={() => {
                dispatch({ type: DELETE_FROM_WILL_WATCH, id: movie.id });

                enqueueSnackbar(`Movie "${movie.title}" deleted from Will watch`, {
                  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                });
              }}
              style={{ marginLeft: '5px' }}
            >
              <DeleteForeverIcon color="secondary" />
            </ListItemIcon>
            <NavLink exact to={`/library/movie/${movie.id}`} className="will-watch-link">
              <ListItemText
                primary={
                  movie.title.length <= 19
                    ? movie.title
                    : movie.title.slice(0, 19) + '...'
                }
              />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </ScrollArea>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { WillWatch } from '../../reducers/willWatch';
import { DELETE_FROM_WILL_WATCH } from '../../types/movie';

import './will-watch.scss';

export default (props: { WillWatch: WillWatch[] }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {props.WillWatch.map((movie: WillWatch, index: number) => (
        <NavLink
          exact
          to={`/library/movie/${movie.id}`}
          key={index}
          className="will-watch-link"
        >
          <ListItem button>
            <ListItemIcon
              onClick={() => dispatch({ type: DELETE_FROM_WILL_WATCH, id: movie.id })}
            >
              <DeleteForeverIcon color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                movie.title.length <= 19 ? movie.title : movie.title.slice(0, 19) + '...'
              }
            />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

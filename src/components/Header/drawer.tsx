import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Home, VideoLibrary, Stars } from '@material-ui/icons';

import { WillWatchList } from '../';

import useStyles from './styles';

import './sideBar.scss';

export default ({
  open,
  onClose,
  willWatch,
}: {
  open: boolean;
  onClose: () => void;
  willWatch: any[];
}) => {
  const theme = useTheme();
  const classes = useStyles(theme as any);

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={onClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon color='secondary' />
            ) : (
              <ChevronRightIcon color='secondary' />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink exact to='/' className='side-link' onClick={onClose}>
            <ListItem button>
              <ListItemIcon>
                <Home color='secondary' />
              </ListItemIcon>
              <ListItemText primary={'main'} />
            </ListItem>
          </NavLink>
          <NavLink exact to='/library' className='side-link' onClick={onClose}>
            <ListItem button>
              <ListItemIcon>
                <VideoLibrary color='secondary' />
              </ListItemIcon>
              <ListItemText primary={'library'} />
            </ListItem>
          </NavLink>
          <NavLink exact to='/top' className='side-link' onClick={onClose}>
            <ListItem button>
              <ListItemIcon>
                <Stars color='secondary' />
              </ListItemIcon>
              <ListItemText primary={'top'} />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <WillWatchList WillWatch={willWatch} />
      </Drawer>
    </>
  );
};

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  IconButton,
  InputBase,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Menu } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Home, VideoLibrary, Stars } from '@material-ui/icons';

import { WillWatchList } from '../';

import useStyles from './styles';

import './sideBar.scss';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default (props: { user?: any; window?: () => Window }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const { willWatch } = useSelector((state: any) => state.willWatchReducer);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [text, setText] = useState('');

  const onChangeSearch = (e: any) => setText(e.target.value);
  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    if (text) {
      console.log(text);
    }
    setText('');
  };

  return (
    <>
      <HideOnScroll window={props.window}>
        <AppBar className="side-bar">
          <div className="side-content">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu fontSize="large" />
            </IconButton>
            <div className="right-side">
              <form className={classes.search} onSubmit={onSubmitSearch}>
                <div className={classes.searchIcon}>
                  <SearchIcon fontSize="large" />
                </div>
                <InputBase
                  placeholder="Search…"
                  value={text}
                  onChange={onChangeSearch}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </form>
            </div>
          </div>
        </AppBar>
      </HideOnScroll>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        id="side-bar"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon color="secondary" />
            ) : (
              <ChevronRightIcon color="secondary" />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink exact to="/" className="side-link">
            <ListItem button>
              <ListItemIcon>
                <Home color="secondary" />
              </ListItemIcon>
              <ListItemText primary={'main'} />
            </ListItem>
          </NavLink>
          <NavLink exact to="/library/1" className="side-link">
            <ListItem button>
              <ListItemIcon>
                <VideoLibrary color="secondary" />
              </ListItemIcon>
              <ListItemText primary={'library'} />
            </ListItem>
          </NavLink>
          <NavLink exact to="/top" className="side-link">
            <ListItem button>
              <ListItemIcon>
                <Stars color="secondary" />
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

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import { IconButton, InputBase, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Menu } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import { SET_SEARCH_MOVIES } from '../../types/movie';

import Drawer from './drawer';
import WillWatchDialog from './WillWatchDialog';

import useStyles from './styles';
import img from '../../image/logo.svg';

import './sideBar.scss';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default (props: any) => {
  const theme = useTheme();
  const history = useHistory();
  const classes = useStyles(theme as any);
  const [open, setOpen] = useState(false);
  const [will, setWill] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { willWatch } = useSelector((state: any) => state.willWatchReducer);

  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const [text, setText] = useState('');

  const onChangeSearch = (e: any) => setText(e.target.value);
  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    if (text) {
      dispatch({ type: SET_SEARCH_MOVIES, search: text });
      history.push('/library/search');
    }
  };

  React.useEffect(() => setWidth(window.innerWidth), []);

  return (
    <>
      <HideOnScroll window={props.window}>
        <AppBar className='side-bar'>
          <div className='side-content'>
            {width < 768 ? (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <Menu fontSize='large' />
              </IconButton>
            ) : (
              <img
                src={img}
                alt='logo'
                className='header-logo'
                onClick={() => history.push('/')}
              />
            )}

            {width > 768 && (
              <nav className='header-center'>
                <NavLink exact to='/' className='heder-link'>
                  Main
                </NavLink>
                <NavLink exact to='/library' className='heder-link'>
                  Library
                </NavLink>
                <NavLink exact to='/top' className='heder-link'>
                  Top
                </NavLink>
                <span className='line'></span>
              </nav>
            )}
            <div className='right-side'>
              <form className={classes.search} onSubmit={onSubmitSearch}>
                <div className={classes.searchIcon}>
                  <SearchIcon fontSize='large' />
                </div>
                <InputBase
                  placeholder='Search…'
                  value={text}
                  onChange={onChangeSearch}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </form>
              {width > 768 && (
                <IconButton
                  aria-label='Library'
                  className={classes.menuButton}
                  color='secondary'
                  onClick={() => setWill(true)}
                >
                  <Badge
                    badgeContent={willWatch.length}
                    color='secondary'
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <VideoLibraryIcon
                      fontSize='large'
                      style={{ fontSize: 30 }}
                    />
                  </Badge>
                </IconButton>
              )}
            </div>
          </div>
        </AppBar>
      </HideOnScroll>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        willWatch={willWatch}
      />
      <WillWatchDialog
        open={will}
        onClose={() => setWill(false)}
        willWatch={willWatch}
      />
    </>
  );
};

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CardActionArea, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.0),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.05),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      height: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export default (props: { user?: any; window?: () => Window }) => {
  const classes = useStyles();

  const [text, setText] = useState('');
  const [showList, setShowList] = useState(true);

  const auth = props.user;
  const id = props?.user?.id;

  const onChangeSearch = (e: any) => setText(e.target.value);
  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    if (text) {
      console.log(text);
    }
    setText('');
  };

  return (
    <HideOnScroll window={props.window}>
      <AppBar className="side-bar">
        <div className="side-content">
          <h2 id="logo">Logo</h2>
          <ul id="side-list" style={{ display: showList ? 'flex' : 'none' }}>
            <li className="side-item">
              <CardActionArea className="side-item-card">
                <NavLink exact to="/" className="side-link">
                  home
                </NavLink>
              </CardActionArea>
            </li>
            <li className="side-item">
              <CardActionArea className="side-item-card">
                <NavLink to="/library" className="side-link">
                  library
                </NavLink>
              </CardActionArea>
            </li>
            <li className="side-item">
              <CardActionArea className="side-item-card">
                <NavLink to="/top" className="side-link">
                  top
                </NavLink>
              </CardActionArea>
            </li>
          </ul>
          <div className="right-side">
            <form className={classes.search} onSubmit={onSubmitSearch}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onFocus={() => setShowList(false || window.innerWidth > 740)}
                onBlur={() => setShowList(true)}
                value={text}
                onChange={onChangeSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
            {auth ? (
              <NavLink to={`/user/account/${id}`} className="link user-link">
                <AccountCircleIcon />
              </NavLink>
            ) : (
              <>
                <NavLink to="/account/login" className="link user-link">
                  Sing in
                </NavLink>
              </>
            )}
          </div>
        </div>
      </AppBar>
    </HideOnScroll>
  );
};

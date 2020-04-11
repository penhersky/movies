import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardActionArea } from '@material-ui/core';

import './sideBar.scss';

export default (prop: { sing: boolean }) => {
  return (
    <div className="side-bar">
      <div className="side-content">
        <h2 id="logo">Logo</h2>
        <ul id="side-list">
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
        <NavLink to="/user/account" className="link user-link">
          Sing in
        </NavLink>
      </div>
    </div>
  );
};

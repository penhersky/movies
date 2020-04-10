import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

export default ({ to, title }: { to: string; title: string }) => {
  return (
    <>
      <NavLink to={to} className="link">
        {title}
      </NavLink>
    </>
  );
};

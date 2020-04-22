import React from 'react';
import { useSelector } from 'react-redux';

import './main.scss';

export default () => {
  const { newMovies } = useSelector((state: any) => state.movieReducer);
  console.log(newMovies);

  return (
    <div className="main">
      <div id="parallax">
        <h1>Movies</h1>
      </div>
      <div className="top" style={{ height: 1000 }}></div>
    </div>
  );
};

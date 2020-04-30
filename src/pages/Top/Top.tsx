import React from 'react';

import { Parallax } from '../../fragments';

import img from '../../image/space-top.jpg';

export default () => {
  return (
    <div className="top-movies">
      <Parallax title="top 100 movies" img={img} opacity={0.8} />
    </div>
  );
};

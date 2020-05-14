import React from 'react';

import './parallax.scss';

export default ({
  img,
  title,
  opacity,
  imgOpacity,
}: {
  img: string;
  title: string;
  opacity?: number;
  imgOpacity?: number;
}) => {
  return (
    <div
      className="parallax"
      style={{ backgroundImage: `url(${img})`, opacity: imgOpacity }}
    >
      <h2 style={{ opacity }}>{title}</h2>
    </div>
  );
};

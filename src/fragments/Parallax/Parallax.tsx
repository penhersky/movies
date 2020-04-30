import React from 'react';

import './parallax.scss';

export default ({
  img,
  title,
  opacity,
}: {
  img: string;
  title: string;
  opacity?: number;
}) => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${img})` }}>
      <h2 style={{ opacity }}>{title}</h2>
    </div>
  );
};

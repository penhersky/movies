import React from 'react';

import './parallax.scss';

export default ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${img})` }}>
      <h2>{title}</h2>
    </div>
  );
};

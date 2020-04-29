import React from 'react';

import './area.scss';

export default ({
  children,
  width,
  height,
}: {
  children: any;
  width?: number;
  height?: number;
}) => {
  return (
    <div className="scroll-area" style={{ width, height }}>
      {children}
    </div>
  );
};

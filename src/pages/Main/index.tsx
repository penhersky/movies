import React, { useRef } from 'react';

import './main.scss';

export default () => {
  const hat = useRef<HTMLDivElement>(document.createElement('div'));

  const parallax = (e: any) => {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let depth1 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;
    let depth2 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`;
    let depth3 = `${50 - (mouseX - w) * 0.04}% ${50 - (mouseY - h) * 0.06}%`;
    let x = `${depth3}, ${depth2}, ${depth1}`;
    try {
      hat.current.style.backgroundPosition = x;
    } catch {}
  };

  document.addEventListener('mousemove', parallax);
  return (
    <div className="main">
      <div id="parallax" ref={hat}>
        <h1>Movies</h1>
      </div>
      <div className="top" style={{ height: 1000 }}></div>
    </div>
  );
};

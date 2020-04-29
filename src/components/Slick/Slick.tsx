import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slick.scss';

export default ({ children }: { children?: any[] }) => {
  const [count, setCount] = useState(4);
  const width = window.innerWidth;
  useEffect(() => {
    if (width < 700) setCount(1);
    else setCount(4);
  }, [width, setCount]);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: count,
    slidesToScroll: count,
    autoplay: true,
    variableWidth: true,
    adaptiveHeight: true,
  };
  return (
    <div className="slick">
      <Slider {...settings} className="slick-body">
        {children}
      </Slider>
    </div>
  );
};

import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

import './slick.scss';

export default ({ children }: { children?: any[] }) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  };

  return (
    <div className="slick">
      <Swiper {...params}>{children}</Swiper>
    </div>
  );
};

import Swiper from '../vendor/swiper';

export const initSwiper = () => {
  const coachSwiper = new Swiper('.coachs-slider', {// eslint-disable-line
    direction: 'horizontal',
    loop: true,

    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });
};



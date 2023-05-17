import Swiper from '../vendor/swiper';

export const initSwiper = () => {
  const coachSwiper = new Swiper('.coachs-slider', {// eslint-disable-line
    direction: 'horizontal',
    loop: true,

    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
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
      prevEl: '.coachs__button--prev',
      nextEl: '.coachs__button--next',
    },
  });
};


export const initSwiperFeedback = () => {
  const coachSwiper = new Swiper('.feedback-slider', {// eslint-disable-line
    direction: 'horizontal',

    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      prevEl: '.feedback__button--prev',
      nextEl: '.feedback__button--next',
    },
  });
};

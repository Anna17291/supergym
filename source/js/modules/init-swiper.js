import Swiper from '../vendor/swiper';

export const initSwiper = () => {
  const coachSwiper = new Swiper('.coachs-slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });
};



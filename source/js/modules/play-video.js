const buttonVideo = document.querySelector('.media-video__button');
const video = document.querySelector('.media-video__track');

export const playVideo = () => {
  buttonVideo.addEventListener('click', () => {
    buttonVideo.style.display = 'none';
    video.style.display = 'block';
  });
};

const buttonVideo = document.querySelector('.media-video__button');
const video = document.querySelector('.media-video');
const iframeBlock = video.querySelector('[data-video-container]');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

export const playVideo = () => {
  if (video && iframeBlock) {
    buttonVideo.addEventListener('click', () => {
      buttonVideo.style.display = 'none';
      video.style.display = 'block';
      const newIframe = createIframe(iframeBlock);
      iframeBlock.append(newIframe);
    });
  }
};



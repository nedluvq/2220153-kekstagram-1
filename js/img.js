import {getRandomPositiveInteger} from './utils.js';

const renderSmallImg = function () {
  const template = document.querySelector('#picture').content.querySelector('.picture');

  const photo = document.querySelector('.pictures');
  const containerFragment = document.createDocumentFragment();
  const createPhotos = getRandomPositiveInteger();

  createPhotos.forEach(({url, likes, comments}) => {
    const photos = template.cloneNode(true);
    photos.querySelector('.picture__img').setAttribute('src', url);
    photos.querySelector('.picture__likes').textContent = likes;
    photos.querySelector('.picture__comments').textContent = comments;
    containerFragment.appendChild(photos);
  });

 photo.appendChild(containerFragment);
};

export {renderSmallImg};

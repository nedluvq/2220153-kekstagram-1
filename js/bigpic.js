const bigPic = document.querySelector('.big-picture');
const likesCount = bigPic.querySelector('.likes-count');
const socialCaption = bigPic.querySelector('.social__caption');
const commentsCount = bigPic.querySelector('.comments-count');
const bigPicImg = bigPic.querySelector('.big-picture__img img');
const bigPicCancel = bigPic.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsList = document.querySelector('.social__comments');
const commentsTemplate = commentsList.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const createComment = function ({ avatar, nickname, commentText }) {
  const comment = commentsTemplate.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = nickname;
  comment.querySelector('.social__text').textContent = commentText;

  return comment;
};

const renderComments = function (comments) {
  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentsList.append(fragment);
};

const createbigPic = function ({ url, likes, description, comment }) {
  bigPic.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  bigPicImg.src = url;
  likesCount.textContent = likes;
  bigPicImg.alt = description;
  socialCaption.textContent = description;
  commentsCount.textContent = comment.length;

  bigPicCancel.addEventListener('click', () => {
    body.classList.remove('modal-open');
    bigPic.classList.add('hidden');
  });

  renderComments(comment);
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    body.classList.remove('modal-open');
    bigPic.classList.add('hidden');
  }
});

export {createbigPic};

// eslint-disable-next-line no-unused-vars
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
function checkStringLength (checkingString, maxLength) {
  return checkingString.length <= maxLength;

}

const generateArray = (length, max) => (
  [...new Array(length)]
    .map(() => Math.round(Math.random() * max)));

const MESSAGES = [
  'Всё отлично!',
  'Неплохо, но не все'
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Александр'
];

let photosId = generateArray(25,25);
let usersId = generateArray(25,25);
let photos = {};
let comments = {};

function getId () {
  const temp = usersId[getRandomPositiveInteger(0,usersId.length-1)];
  delete(usersId[getRandomPositiveInteger(0,usersId.length-1)]);
  return temp;
}


function getPicId () {
  const temp = photosId[getRandomPositiveInteger(0,photosId.length-1)];
  delete(photosId[getRandomPositiveInteger(0,photosId.length-1)]);
  return temp;
}

// eslint-disable-next-line no-unused-vars
checkStringLength('123123',2313);

for(let i = 0; i <= 25;i++) {
  photos.push({
    id: getPicId(),
    url: `photos/${getPicId()}.jpg`,
    description: 'Описание фотографии',
    likes: `Количество лайков: ${getRandomPositiveInteger(15, 200)}`,
    comments: MESSAGES[getRandomPositiveInteger(0, 1)]
  })
  comments.push({
      id: getPicId(),
      url: `photos/${getPicId()}.jpg`,
      description: 'Описание фотографии',
      likes: `Количество лайков: ${getRandomPositiveInteger(15, 200)}`,
      comments: MESSAGES[getRandomPositiveInteger(0, 1)]
  })
}

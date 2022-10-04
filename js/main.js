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

const MESSAGES = [
  'Всё отлично!',
  'Неплохо, но не все'
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Александр'
];

let photosId = 0;
let usersId = 0;

const photos = {};
const comments = {};

function getId () {
  return usersId++;
}

function getPicId () {
  return photosId++;
}

for (let i = 0; i <= 24; i++) {
  photos[i] = ({
    id: getPicId(),
    url: `photos/${ getPicId() }.jpg`,
    description: 'Описание фотографии',
    likes: `Количество лайков: ${getRandomPositiveInteger(15, 200)}`,
    comments: MESSAGES[getRandomPositiveInteger(0, 1)]
  });

  comments[i] = ({
    id: getId(),
    avatar: `img/avatar-${ getRandomPositiveInteger(0, 5) }.svg`,
    message: MESSAGES[getRandomPositiveInteger(0, 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length-1)]
  });
}



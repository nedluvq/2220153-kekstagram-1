function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (checkingString, maxLength) {
  return checkingString.length <= maxLength

}

const generateArray = (length, max) => (
  [...new Array(length)]
    .map(() => Math.round(Math.random() * max)))

const MESSAGES = [
  'Всё отлично!',
  'Неплохо, но не все'
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Александр'
]

let photosId = generateArray(25,25);
let usersId = generateArray(25,25);

function getId () {
  let temp = usersId[getRandomPositiveInteger(0,usersId.length-1)];
  delete(usersId[getRandomPositiveInteger(0,usersId.length-1)]);
  return temp
};

console.log(getId);
function getPicId () {
  let temp = photosId[getRandomPositiveInteger(0,photosId.length-1)];
  delete(photosId[getRandomPositiveInteger(0,photosId.length-1)]);
  return temp
};


let comment = {
  id: getId(),
  avatar: `img/avatar-${ getRandomPositiveInteger(0, 5) }.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, 1)],
  name: NAMES[getRandomPositiveInteger(0,NAMES.length-1)]
}

let photoInfo = {
  id: getPicId(),
  url: `photos/${getPicId()}.jpg`,
  description: 'Описание фотографии',
  likes: `Количество лайков: ${getRandomPositiveInteger(15, 200)}`,
  comments: MESSAGES[getRandomPositiveInteger(0, 1)]
}

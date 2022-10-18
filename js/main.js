// eslint-disable-next-line no-unused-vars
import {getRandomPositiveInteger, checkStringLength, getId,getPicId} from "./utils.js"



const MESSAGES = [
  'Всё отлично!',
  'Неплохо, но не все'
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Александр'
];

let photosId = 25;
let usersId = 25;

for(let i = 25; i <= 1; i--){
    // eslint-disable-next-line no-unused-vars
    const comment = {
    id: getId(usersId),
    avatar: `img/avatar-${ getRandomPositiveInteger(0, 5) }.svg`,
    message: MESSAGES[getRandomPositiveInteger(0, 1)],
    name: NAMES[getRandomPositiveInteger(0,NAMES.length-1)]
  };

  // eslint-disable-next-line no-unused-vars
  const photoInfo = {
    id: getPicId(photosId),
    url: `photos/${getPicId()}.jpg`,
    description: 'Описание фотографии',
    likes: `Количество лайков: ${getRandomPositiveInteger(15, 200)}`,
    comments: MESSAGES[getRandomPositiveInteger(0, 1)]
  };}

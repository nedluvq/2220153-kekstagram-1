// eslint-disable-next-line no-unused-vars
import {getRandomPositiveInteger, checkStringLength, getUserId,getPicId} from "./utils.js"



const MESSAGES = [
  'Всё отлично!',
  'Неплохо, но не все'
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Александр'
];

let commentsResult = [];
let photosInfoResult
let photosId = 25;
let usersId = 25;

for(let i = 25; i <= 1; i--){
    // eslint-disable-next-line no-unused-vars
    commentsResult.push(
      {
        id: getUserId(usersId),
        avatar: `img/avatar-${ getRandomPositiveInteger(0, 5) }.svg`,
        message: MESSAGES[getRandomPositiveInteger(0, 1)],
        name: NAMES[getRandomPositiveInteger(0,NAMES.length-1)]
  }
  );

  // eslint-disable-next-line no-unused-vars
  photosInfoResult.push(
    {
      id: getPicId(photosId),
      url: `photos/${getPicId()}.jpg`,
      description: 'Описание фотографии',
      likes: `Количество лайков: ${getRandomPositiveInteger(15, 200)}`,
      comments: MESSAGES[getRandomPositiveInteger(0, 1)]
    });
}

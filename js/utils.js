function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (checkingString, maxLength) {
  return checkingString.length <= maxLength;

}

function getUserId (usersId) {
  if (usersId === 0) {
    return 0;
  }
  return usersId - 1;
}


function getPicId (photosId) {
  if (photosId === 0) {
    return 0
  }
  return photosId - 1
}

export {getRandomPositiveInteger, checkStringLength,getUserId, getPicId}

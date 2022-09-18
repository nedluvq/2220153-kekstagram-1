function randomNumber(from,to) {
  if(from < 0 || to < 0) {
    return "Одна из границ отрицательная"
  }
  if(from > to) {
    return Math.random(to,from);
  }
  return Math.random(from,to);
}

function checkStringLength(checkingString,maxLength ) {
  if(checkingString.length <= maxLength ) {
    return true
  }else{
    return false
  }
}

randomNumber(1,100);
checkStringLength('123',123);

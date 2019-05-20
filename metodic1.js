function callFuncton(fn) {
  var r = fn();
  console.log('Результат работы функции:', r);
}

callFuncton(function() {
  return 10 + 10;
});
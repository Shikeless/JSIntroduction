function bindFunction(fn) {
  var arr = [];

  for (var i = 1; i < arguments.length; i++) {
    arr += arguments[i];
  }

  var fun = fn.bind(null, arr);
  return fun;

}

function sum(a) {
	return a
}

var newSum = bindFunction(sum, 2, 4)
console.log(newSum());





function bi(fn, ...stuff) {
  var fun = fn.bind(null, stuff);
  return fun;
}

function sum(a)
{
   return a;
}

var newSum = bi(sum, 2, 4)
console.log(newSum());
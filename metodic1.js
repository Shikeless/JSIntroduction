// function returnArgumentsArray() {
//   var s = 0;
//   for (var i = 0; i < arguments.length; i++) {
//   s = s + arguments[i];
//   }
//   return s;
// }
// console.log(returnArgumentsArray(1, 2, 4, 5));

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию

 Пример:
   function sum(a, b) {
     return a + b;
   }

   var newSum = bindFunction(sum, 2, 4);

   console.log(newSum()) выведет 6
 */

//вариант 1

 // function bind(func, context) {
 //   return function() { 
 //     return func.apply(context, arguments);
 //   };
 // }

 // function f() {
 //   console.log( arguments );
 // }

 // var g = bind(f, 1, 2 )
 // g();


 //вариант 2

 // function b(func, a, b) {
 // 	// for (var i = 1; i < arguments.length; i++){
 // 	// 	arr.push(arguments[i]);
 // 	// };
 //   	return function() { 
 //    return func.apply(a, b);
 //   };
 // }

 // function f() {
 //   return a + b;
 // }

 // var g = b(f, 1, 2);
 // console.log(g);


function binder(f) { 
  var arr = [];
  for (var i = 1; i < arguments.length; i++) {
  arr += arguments[i];
  }
  var func = f.bind(null, arr);
  return func;
}

function f(a)
{
   return a;
}

console.log(binder(f, 1, 2, 3));





function binder(f) { 
  var arr = [];
  for (var i = 1; i < arguments.length; i++) {
  arr += arguments[i];
  }
  var func = f.bind(null, arr);
  return func;
}

function f(a)
{
   return a;
}

var t = binder();
console.log(t());

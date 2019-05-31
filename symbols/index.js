//СИМВОЛЫ
const mySymbol = Symbol();
const myNewSymbol = Symbol();

console.log(mySymbol);
console.log(myNewSymbol);

const obj = {
	name: 'Sergey',
	lastName: 'Petrov'
};

obj.old = 40;

obj[mySymbol] = 'Hello';
obj[myNewSymbol] = 'Hello again';

for(const name in obj) { //символы не видимы при переборе
	console.log(name);
}

console.log(obj[mySymbol]); //обратиться к символу на прямую по прежнему можно


//ИТЕРАТОРЫ
var a = [1, 2, 3, 4];

for (let i = 0; i < a.length; i++) { //перебираем массив
	console.log(a[i]);
}


function range(from, to) {
	for (let i = from; i < to; i++) {  //итератор from to
		console.log(i);
	}
}
range(10, 30);


function sum() {
	var result = 0;

	for(let i = 0; i < arguments.length; i++ ) { //итератор суммы аргументов
		console.log(arguments[i]);
		result += arguments[i];
	}

	return result;
}

console.log(sum(30, 55, 17, 22));

//структура итератора
var iterator = {
	next() {               //следующий элемент массива
		return {
			value: '',     //значение элемента массива
			done: ''	   //true если следующего элемента массива нет
		};
	}
};

var numbers = [1,2,3,4];

for (var element of numbers) {

}

next(); // {value: 1, done: false}
next(); // {value: 2, done: false}
next(); // {value: 3, done: false}
next(); // {value: 4, done: false}
next(); // {value: 0, done: true}  //перебор массива завершен


function sum3() {
	for(const arg of arguments)	{

	}
}

//array
//--iterator
//----next()

Symbol.iterator //символ объекта у которого есть итератор

function range(from, to) {									//создаем итератор обернутый в функцию
	var objectWithIterator = {};

	objectWithIterator[Symbol.iterator] = function () { 	
		var i = from;

		return {
			next() {
				return {
					value: i,
					done: i++ === to + 1
				}
			}
		};
	};

	for(const number of objectWithIterator) {
		console.log(number);
	}

	return objectWithIterator;
}
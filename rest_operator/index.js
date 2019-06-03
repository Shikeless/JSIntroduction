//REST
var arr = [1, 2, 3, 4];

var [first, second, ...rest] = arr; //использование rest operatora ... ,имя не имеет значение

console.log(first, second, rest);

function sum(first, second, ...rest) { 	//	использование rest оператора как аргумента функции
	console.log(first, second, rest);
}

sum(...arr); //в случае использования в качестве аргумента массива, функционирует как spread оператор 

//объединение массивов
var numbers = [1, 2, 3, 4]
var numbers2 = [5, 6, 7, 8]
var result = numbers.concat(numbers2); //объединение с помощью метода concar
console.log(result);
var result = [ ...numbers, ...numbers2 ] //объединение 


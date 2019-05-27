var numbers = [1, 2, 3, 4];

function sum() {
	var result = 0 ;

	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}

	return result;
}

console.log(sum(numbers)); //мы передали один аргумент - массив

console.log(sum(...numbers)); //использование spread оператора ... решает эту проблему

//объединение массивов
var numbers = [1, 2, 3, 4]
var numbers2 = [5, 6, 7, 8]
var result = numbers.concat(numbers2); //объединение с помощью метода concat
console.log(result);
var result = [ ...numbers, ...numbers2 ] //объединение с помощью spread 
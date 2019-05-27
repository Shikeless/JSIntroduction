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
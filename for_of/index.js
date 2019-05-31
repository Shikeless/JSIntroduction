//FOR OF
var numbers = [1, 2, 3, 4];

for (var i = 0; i < numbers.length; i++){
	console.log(numbers[i]);
}

for (var number of numbers) {	//цикл for of
	console.log(number);
}

function sum() {
	var result = 0;

	for (var arg of arguments) {
		result += arg;
	}

	return result;
}

console.log(sum(1,2,3,4));
//ЛОГИЧЕСКИЕ ОШИБКИ
function div(a, b) {
	if (b != 0) {
		return a / b;
	}
}

var result = div(10,0);

if (result != undefined) {
	console.log(result);
} else {
	console.log('На ноль делить нельзя');
}


function div1(a, b) {
	if (b < 0) {
		console.log('b должен быть положительным числом');
	} else if (b == 0) {
		console.log('На ноль делить нельзя');
	} else if (b == undefined) {
		console.log('b должен быть передан');
	} else if (!isFinite(b)) {
		console.log('b должен быть числом');
	} else {
		return a / b;
	}
}

var result = div1(10,0);

if (result != undefined) {
	console.log(result);
}

//ИСКЛЮЧЕНИЯ
try {
	console.log('До');
	throw new Error('Текст ошибки');
	console.log('После');
} catch (e) {
	console.log(e.message);
}


function div3(a, b) {
	try {
		if (b < 0) {
			throw new Error('b должен быть положительным числом');
		} else if (b == 0) {
			throw new Error('На ноль делить нельзя');
		} else if (b == undefined) {
			throw new Error('b должен быть передан');
		} else if (!isFinite(b)) {
			throw new Error('b должен быть числом');
		} 

		return a / b;	
	} catch (e) {
		console.log(e.message);
	}
} 

//выносим try catch за пределы функции
function div3(a, b) {
		if (b < 0) {
			throw new Error('b должен быть положительным числом');
		} else if (b == 0) {
			throw new Error('На ноль делить нельзя');
		} else if (b == undefined) {
			throw new Error('b должен быть передан');
		} else if (!isFinite(b)) {
			throw new Error('b должен быть числом');
		} 

		return a / b;
}

try {
	var result = div3(10,0);
	console.log(result);
} catch (e) {
	console.log(e.message);
}
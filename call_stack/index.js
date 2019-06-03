//СТЭК ВЫЗОВА
function fn1() {
	console.log('До вызова fn2');
	fn2();
	console.log('После вызова fn2');
}

function fn2() {
	console.log('До вызова fn3');
	fn3();
	console.log('После вызова fn3');
}

function fn3() {
	console.log('Внутри fn3');
	throw new Error('Ошибка');
}

try {
	console.log('До вызова fn1');
	fn1();
	console.log('После вызова fn1');
} catch (e) {
	console.log(e.message);
}
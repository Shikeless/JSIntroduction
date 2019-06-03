//обычная функция
function fn() {

}

//объявляем стрелочную функцию
const fn2 = () => {

};

//объявляем анонимную функцию
const fn 3 = function() {

};


//объявляем массив
const a = [];
a.add(1);
a.add(2);


//объявляем сэт 
const s = set([]);
s.add(1);



//объявление переменных
var   //всплывает
let   //не всплывает
const //не всплывает



//объявляем цикл
for ( let i = 0; i < 100; i++ ) {
	//...
}


//разница в массиве и сэте
var a = [1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6]; // массив не кнтролирует уникальность значений
a.push(2);

var s = new Set([[1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6]]); //Set следит за уникальностью значений


//стандартный способ испльзования цикла
var a = [1, 2, 3, 4];
for ( var i = 0; i < a.length; i++ ) {
	console.log(a[i]);
}

//выносим метод length в отдельную переменную, для упрощения работы интерпритатора
var a = [1, 2, 3, 4];
var length = a.length;
for ( var i = 0; i < length; i++ ) {
	console.log(a[i]);
}


//неизвестное колличество аргументов
function sum() {
	var i = 0;
	for (var x = 0; x < arguments.length; x++) {
		i = i + (arguments[x]);	
	}
    return console.log(i);
}


//рекурсия
function fn1() {
	console.log("!");
	fn1();
}
fn1();


//ограничиваем колличество возвратов условием
var x = 0;
function fn1() {
	console.log(x);
	x += 1;
	if (x <= 100){
		fn1();
	}
}
fn1();

//пример ограничения от большего к меньшему
function fn1(i) {
	console.log(i);
	i--;
	if (i > 0){
		fn1(i);
	}
}
fn1(10);


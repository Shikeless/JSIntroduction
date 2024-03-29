// типы данных
// number (числа) - 20, 30, 34.5
// string (строки) - 'привет', "hello"
// boolean (буль) - true (да), false (нет)
	// 10 == 10 - true 
	// 100 == 10 - false 
//object (объект)
//специальные значения - undefined   




//переменные 
//определяем переменную
var name = 'Сергей';




//вывод значения в консоль
console.log(name);




//управляющие коснтрукции
//условные операторы
if (name == 'Сергей') {
	console.log('да');
}

if (10 > 5) {
	console.log('да');
}
//if else
if (name == 'Сергей') {
	console.log('да');
} else {
	console.log('нет');
}

if (10 < 5) {
	console.log('да');
} else {
	console.log('нет');
}

//циклические операторы
for (
	var i = 0; //инициализация оператора
	i < 3; //условная часть(условие)
	i++ //инкримент, модификация (i + 1)
) {
	console.log(i);
}




//функции
function sum1(a, b) {  //sum1-имя функции, (a, b)- параметры функции
	return a + b;  //тело функции
}

function sum2(a, b) {  
	var result = a + b;
	return result;  
}

//вывод функции непосредственно в консоль
console.log(sum1(2, 3));
//вывод функции через объяывление переменной
var result = sum1(10, 20);
console.log(result);



//область видимости и замыкания!!! - ВАЖНО
//облсть видимости - список всех доступных переменных - каждая функция знает где она была объесвлена, и может пользоваться областью видимости доступной на момент объясвления
//замыкание - это спососбность функции пользоваться переменными из параметров функции или из области видимости выше, но не в других подфункция или подоблостях
//someVar, someOtherVar, sum  - глобальная область видимости
var someVar = 20;
var someOtherVar = 30;

function sum(a, b) {  //функция sum объявлена в глобальной области видимости и может пользоваться всеми переменными глобальной области видимости  
	//a, b, result  -  область видимости внутри функции
	var result = a + b + someVar + someOtherVar; //функция ищет a, b внутри функции; функция ищет someVar, someOtherVar в вышележащей области видимости (в глобальной области видимости)
	return result;
}

function someFn(a, b, c, d) {
	//a, b, c, d, var1, var2
	var var1 = 10;
	var var2 = 20;
}

console.log(sum(2,3)) //результат 55 

//пример 2
var gl1 = 10;

function fn1(b, c) {
	function fn2(d, e) {
		return gl1 + b + c + d + e;
	}
	return fn2(3,4);
}

console.log(fn1(1,2));




//всплытие - hoisting 
if (10 > 100) {
	var hos1 = 10; // возвращает undefined 
}

console.log(hos1);
//все объявления переменных выносятся в глобальную область видимости
//а внутри условного оператора остается только присвоение переменных
//со стороны интерпиратора это выглядит следующим образом
// var hos1;  - переменнная объявлена в глобальной области видимости
// if (10 > 100) {
//    hos1 = 10;  -  здесь переменной присваивается значение
//} 
//по этой причине скрипт возвращает пустую переменную - undefined 

//пример 2 
console.log(hos2);

var hos2 = 10; // переменная возвращается в глобальную област видимости, но значение ей присваеватся после вызова в консоль, по этому возрвщается undefined 

//пример 3
for (
	var i = 0; //инициализация оператора
	i < 3; //условная часть(условие)
	i++ //инкримент, модификация (i + 1)
) {
	console.log(i);
}

console.log(i); //переменная i выносится в глобальную область видимости, по этому после объявления, запуска циклического оператора и повторного обращения к переменной i возвращается значение 3 

//пример 4
var result = hosSum(2, 3);

console.log(result);

function hosSum(a, b) {  //функции так же как и переменные всплывают в глобальную область видимости и 
	return a + b; 
}




//let  -  не подвержена всплытию и моеж твызываться только из той области видимости, где она была объявлена
if (10 > 1) {
	let lt1 = 10;
	console.log(lt1); //возвращает 10 
}

//console.log(lt1); //возвращает ошибку(если раскоментировать), потомучто не видит переменной объявленной через let

//пример 2
for (
	let lt2 = 0; 
	lt2 < 3; 
	lt2++) {
	console.log(lt2); //срабатывает бесплатно
}

//console.log(lt2); //возвращает ошибку(если раскоментировать)




//const - переменные которые объявляются 1 раз, и не могут менять свое значение, не подвержен всплытию 
const cnst1 = 12;

console.log(cnst1);

//cnst1 = 200; //возвращает ошибку(если раскоментировать)

console.log(cnst1);




//объекты
var obj1 = { name: 'Сергей' }; //объявляем объект со свойством name со значением 'Сергей'
var obj2 = { name: 'Сергей', lastName: 'Мелюков' };
var obj3 = { 
	name: 'Иван', 
	lastName: 'Петров', 
	old: 40 
};

console.log(obj3.lastName); //точечное обращение к переменной
console.log(obj3['name']); //обращение к переменной через скобку

obj3.name = 'Дмитрий'; //меняем значение свойства объекта

console.log(obj3['name']); 

obj3['name'] = 'Анатолий' //меняем значение свойства объекта

console.log(obj3['name']); 

console.log(obj3.work); //обращаемся к неопределенному свойству

obj3.work = 'programmer' //создаем новое свойство объекта

console.log(obj3.work);




//массивы
var bj1 = {
	name: 'Максим',
	lastName: 'Перепелкин'
};

var bj2 = {
	name: 'Петр',
	lastName: 'Палкин'
};

var bj3 = {
	name: 'Федор',
	lastName: 'Федотов'
};

var array = ['Сергей', 'Иван', 'Петр']; //объявляем массив

console.log(array[1]);

array[1] = 'Роман'; //изменяем элемент массива

console.log(array[1]); 

console.log(array.length); //обращаемся к свойству массива возвращаеюего его длинну

array.push('Дмитрий'); //добавляемся элемент в массив

console.log(array.length);

//перебираем все элементы массива
for (
	var i=0;
	i < array.length;
	i++
) {
	console.log(array[i]); //элемент массива с индексом 
}

var array2 = [ bj1, bj2, bj3 ] //храним объекты в массиве
for (
	var i=0;
	i < array2.length;
	i++
) {
	console.log(array2[i].name);  //обращаемся к свойствам вложеных объектов
}




//IEFE - моментальный вызов функции при объявлении
(function(a, b) {
    console.log(a + b);
})(1, 1);
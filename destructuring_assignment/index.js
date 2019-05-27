//ДЕСТРУКТУРИЗАЦИЯ
var [a1, b1] = [1, 2]; //соотвественно присвоили элементы левого правого массив, левому
console.log(a1, b1); 

var input = 'Sergey Petrov'; 
var parts = input.split(' '); //сплитим строку по пробелу
console.log(parts); //возвращает массив parts
var [name1, lastName1] = parts //соотвественно присвоили элементы левого правого массив, левому
var [name1, lastName1] = input.split(' '); //или еще короче, сразу засплитеный инпут
console.log(name1, lastName1);  //возвращаем обе переменные

//переопределение переменных так же используется с Деструктуризацией
[name1, lastName1] = input.split(' ');
console.log(name1, lastName1); 

var input = 'Petrov Sergey Ivanovich'; //поменяли элементы местами и добавили новый элемент
var [lastName1, name1, secondName1] = input.split(' '); //деструктурировали новый массив с 3 элементами
console.log(lastName1, name1, secondName1); 

//если нам не нужен один или несколько элементов присваиваемого
//присваивающий массив определяется с отсутвующей переменной
var [, name1, secondName1] = input.split(' '); //сохраняется ,
console.log(name1, secondName1);

var [lastName1, , secondName1] = input.split(' '); //пропускать можно любой по счету элемент
console.log(lastName1, secondName1);  

function hi(userInfo) {
	var [lastName1, name1, ] = userInfo; //деструктурируем элементы аргумента
	console.log(`Hi my name is: ${name1} ${lastName1}`); 
}

hi(input.split(' ')); //передаем массив как аргумент


function hi([lastName1, name1, ]) {     //использование деструктурирующего присваивания как аргумент функции
	console.log(`Hi my name is: ${name1} ${lastName1}`); 
}

hi(input.split(' ')); //передаем массив как аргумент

//предположим значение одного из аргументов отсутсвует
var input = 'Petrov Sergey'
function hi([ ,name1, secondName1 = '']) {     //можно определить значение аргумента по умолчанию 
	console.log(`Hi my name is: ${name1} ${secondName1}`); 
}

hi(input.split(' ')); //передаем массив как аргумент



//ДЕСТРУКТУРИЗАЦИЯ, объекты
var user = {
	lastName: 'Petrov',
	name: 'Sergey',
	secondName: 'Ivanovich'
};

console.log(`Привет, меня зовут ${user.name} ${user.secondName}`);  //интерполяция строк из объекта

//деструктурируещее присваивание по объекту, фигурные скобки
//нет необходимости заменять отсутвующие параметры пробелами
var {name, secondName, old = ''} = user; //в случае остуствия параметра, можно указать значение по умолчанию 

console.log(`Привет, меня зовут ${name} ${secondName}, мне ${old} лет`);
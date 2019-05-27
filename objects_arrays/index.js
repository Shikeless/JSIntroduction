//комбинация строк и интерполяция
var name = 'Sergey';
var lastName = 'Petrov';
var old = 30;
var profession = 'Driver';

var fullInfo = name + ' ' + lastName + ' (' + old + ', ' + profession + ')';  //примитивный метод
var interpol = `${name} ${lastName} (${old}, ${profession})`; //интерполяция строк
console.log(fullInfo);
console.log(interpol);



//ОБЪЕКТЫ
var a = 10;
a = 100;
a = 'Ivan';
a = 'Hello'; //значение переменной переопределяются

var obj = { name: 'Sergey', 
			lastName: 'Petrov', 
			old: 40
};

console.log(obj.name); //обращение к свойству объекта, точечная нотация
console.log(obj['name']); //обращение к свойству объекта, 

obj.name = 'Ivan';
obj['name'] = 'Dmitry'; //поменять значение свойства объекта

console.log(obj.work); //undefined нет такого свойства;
obj.work = 'programmer'; //создаем новое свойство объекта;
console.log(obj.work); //параметр создан и определен



//МАССИВ
var hum1 = { name: 'Sergey', 
			 lastName: 'Petrov', 
			 old: 40
};

var hum2 = { name: 'Ivan', 
			 lastName: 'Dimidov', 
			 old: 30
};

var arr = ['Sergey', 'Ivan', 'Max']; //определяем массив

console.log(arr[1]);     //обращаемся к элементу массива
arr[1] = 'Roman';        //переопределяем элемент массива
console.log(arr.length); //возвращаем колличество элементов массива

arr.push('Dmitriy');     //добавляем новый элемент массива 

for( var i = 0; i < arr.length; i++) {  //перебираем все элементы массива
	console.log(arr[i]);
};

var arr1 = [  //хранение объектов в массиве
	{
		name: 'Sergey', 
		lastName: 'Petrov', 
		old: 40
	},
	{
		name: 'Ivan', 
		lastName: 'Dimidov', 
		old: 30
	}
];

for( let i = 0; i < arr1.length; i++) {  //обращаемся к параметрам объектов в массиве
	const name = arr1[i].name;  //можно использовать const, посколько эта переменная не переназначается
	console.log(name);
};




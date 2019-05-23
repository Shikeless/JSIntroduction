var obj = {
		prop: 'hey'
	},
	regexp = /baba/g,
	fn = function (){},
	arr = [1,2,3];

// typeof - вывести тип данных объекта
console.log( typeof obj);
console.log( typeof regexp);
console.log( typeof arr);
console.log( typeof fn);



obj.prop = 'loftblog' //изменить параметр объекта
console.log( obj.prop );


arr[2] = 24 //изменим свойство элемента массива
console.log( arr );


var str = 'Hulk Hogan'
str = str.toUpperCase(); //метод капиталайз
console.log ( str );


//ОБЕРТКИ для применения к примитивнык классам методов
//они же используются для строгой типизации объектов
//применять это считается дурным тоном
String('2345') // способ строгой типизации
console.log( new String('2345'));
console.log( typeof String);



console.log ('_______________________')
var num = Number(123);//способ строгой типизации
console.log( typeof num );// вернет number
console.log( typeof num.toString()); //преобразование в строку




console.log ('_______________________')
var numObj = new Number(124);
console.log( typeof numObj ); //вернет объект
console.log( typeof numObj.toString()); //преобразование в строку



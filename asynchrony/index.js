//ТАЙМЕРЫ                                
console.log('до setTimeout');
setTimeout(function() {                    //setTimeout отсчитывается после хагрузки всего кода в интерпритатор
	console.log('5000');
}, 5000);

setTimeout(function() {                    //setTimeout если таймер становится просроченым из-за выполнения других 
    console.log('3000')                    //фрагментов кода, он выполняется незамедлительно
}, 3000);


console.time('q');
for (let i = 0; i < 3000000000; i++) {
	let a = i / i;
}
console.timeEnd('q');
console.log('после for');



///////////////////////

const queue = [                    //визуализация SetTimeout
	{
		fn: function(){
			console.log('123');
		},
		delay: 30000,
		start: 123141421
	},{
		fn: function(){
			console.log('123');
		},
		delay: 10000,
		start: 123141421
	}
];
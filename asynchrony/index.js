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


//PROMISE

const promise = {
	state: ['pending',    //ожидание
			'fulfiled',   //выполнено успешно
			'rejected'	  //выполнено неудачно
	],
	resolvedQueue: [      //очередь функций выполняемая в момент перехода promise от pending в fulfiled
		function() {
			console.log('1');
		},
		function() {
			console.log('2');
		},
		function() {
			console.log('3');
		}
	],
	rejectedQueue: [      //очередь функций выполняемая в момент перехода promise от pending в rejected
		function() {
			console.log('1');
		},
		function() {
			console.log('2');
		},
		function() {
			console.log('3');
		}
	]
}

console.log('до promise');
const tmp = new Promise(function(resolve, reject) { //resolve - переводчик в режим успешного выполнения //reject - выполнено неудачно
	resolve();
});
console.log('после promise');

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();                             
			console.log('resolved');
		}, ms)
	})
}

const prom = delay(2000);

console.log('До then');
prom.then(() => console.log(1));           //добавляет новую функцию в очередь resolvedQueue:
prom.then(() => console.log(2));  		   //и создаем новый объект promise с пустым resolveQueue:
prom.then(() => console.log(3));
console.log('После then');  			   //then только добавляет новые параметры в объект prom, который 
										   //вызывает функцию delay с задержжкой в 2 секунды, по этому сначала
										   //отработают консоль логи


//ASYNC AWAIT
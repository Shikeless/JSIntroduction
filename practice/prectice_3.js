//пример с коллбаками
const a = ['hello', 'loft', 'school'];

a.forEach(function(item) {
	console.log(item)
}) 

setTimeout(function() {
	a.forEach(function(item) {
	console.log(item)
}) 
}, 10000)
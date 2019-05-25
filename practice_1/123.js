var x = 0;
function fn1(i) {
	console.log(i);
	i--;
	if (i > 0){
		fn1(i);
	}
}
fn1(10);
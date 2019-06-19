	function delay(ms) {
			return new Promise((resolve, reject) => {
				setTimeout(() => resolve(console.log(Math.random())), ms)
			});
		}

		async function fn() {
			console.log('до');
			try {
				await delay(1000);  //ждет await, затем запускает функцию, работает только внутри async функций
				await delay(1000);  //в случае использования reject, необходима обертка из try/catch
				await delay(1000);
			} catch (e) {
				console.log(e);     //перепрыгивает в сatch в случае rejecta
			}								  
			console.log('после');
		}

		fn();
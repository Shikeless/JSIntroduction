VK.init({
	apiId: 7025972
});

function auth() {
	return new Promise((resolve, reject) => {
		VK.Auth.login(data => {
			if (data.session) {
				resolve();
			} else {
				reject(new Error('Не удалось авторизироваться'));
			}
		}, 2);
	});
}

function callApi(method, params) {
	params.v = '5.76';

	return new Promise((resolve, reject) => {
		VK.api(method, params, (data) => {
			if (data.error) {
				reject(data.error);
			} else {
				resolve(data.response);
			}
		});
	})
}

auth().then(() => console.log('ok'));
		
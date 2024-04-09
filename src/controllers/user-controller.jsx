export async function logIn(payload) {
	try {
		const response = await fetch(`http://localhost:3000/user/login`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: payload.username,
				password: payload.password,
			}),
		});
		const data = await response.json();
		// console.log(data);
		return data
	} catch (error) {
		console.error(error.message);
	}
}


export async function signUp(payload) {
	console.log(payload)
	try {
		const response = await fetch("http://localhost:3000/user/signup", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: payload.username,
				password: payload.password,
			}),
		});
		const data = await response.json();
		console.log(data);
	
		return {data, response};
	} catch (error) {
		console.error(error.message);
	}
}
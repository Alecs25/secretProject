export async function postComment(payload) {
	console.log(payload);
	try {
		const response = await fetch(`http://localhost:3000/articles/${payload.article_id}/comments/create`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: payload.username,
				date: payload.date,
				message: payload.message,
				parent_id: payload.parent_id,
				user_id: payload.user_id,
			}),
		});
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error.message);
	}
}

export async function getComments(article_id) {
	console.log(article_id);
	try {
		const response = await fetch(`http://localhost:3000/articles/${article_id}/comments`);
		const data = await response.json();
		return data ;
	} catch (error) {
		console.error("there has been an error" + error);
	}
}

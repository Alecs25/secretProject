export async function postComment(payload) {
    console.log(payload)
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
                
			}),
		});
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error.message);
	}
}

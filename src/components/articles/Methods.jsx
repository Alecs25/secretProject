export async function fetchArticles(callback) {
	try {
		const response = await fetch("http://localhost:3000/articles");
		const data = await response.json();

		// console.log(response);
		// console.log(data);
		callback(data);
	} catch (error) {
		console.error(error.message);
	}
}

export async function FetchArticle(id, callback) {
	try {
		const response = await fetch(`http://localhost:3000/article/${id}`);
				console.log(response);

		const data = await response.json();

		console.log(data);
		callback(data);
	} catch (error) {
		console.error(error.message);
	}
}

export async function DeletePost(articleId, callback) {
	console.log(typeof articleId);
	try {
		const response = await fetch(`http://localhost:3000/article/${articleId}`, {
			method: "DELETE",
			body: `{ id: ${articleId} }`,
		});
	} catch (error) {
		throw new Error("there has been an error: " + error);
	}
}

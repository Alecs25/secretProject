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
		const data = await response.json();

		// console.log(response);
		//console.log(data);
		callback(data);
	} catch (error) {
		console.error(error.message);
	}
}

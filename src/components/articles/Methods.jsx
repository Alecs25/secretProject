import parse from "html-react-parser";
const parser = new DOMParser();

export async function fetchArticles(callback) {
	try {
		const response = await fetch("http://localhost:3000/articles");
		const data = await response.json();
		// console.log(data);
		const parsedData = data.map((e) => {
			console.log(e);

			const parsedData = {
				id: e.article_id,
				article: JSON.parse(e.article),
			};
			//console.log(parsedData);
			return parsedData;
		});
		if (callback) {
			callback(parsedData);
		} else {
			return parsedData;
		}
		return null;
	} catch (error) {
		console.error("there has been an error" + error);
	}
}

export async function FetchArticle(id, callback) {
	try {
		const response = await fetch(`http://localhost:3000/article/${id}`);
		const data = await response.json();
		// console.log(data);
		const parsedData = {
			id: data.article_id,
			article: JSON.parse(data.article),
		};
		// console.log(parsedData);
		if (callback) {
			callback(parsedData);
		} else {
			return parsedData;
		}
	} catch (error) {
		console.error(error.message);
	}
}

export async function DeletePost(articleId) {
	try {
		const response = await fetch(`http://localhost:3000/article/${articleId}`, {
			method: "DELETE",
			body: `{ id: ${articleId} }`,
		});
	} catch (error) {
		throw new Error("there has been an error: " + error);
	}
}

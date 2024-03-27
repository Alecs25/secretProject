import parse from "html-react-parser";
const parser = new DOMParser();
export async function fetchArticles(callback) {
	try {
		const response = await fetch("http://localhost:3000/articles");
		const data = await response.json();
		console.log(data);
		const parsedData = data.map((e) => {
			const body = parse(e.body);
			const title = parse(e.title);
			const parsedData = {
				body: body,
				title: title,
				id: e.article_id,
			};
			return parsedData;
		});

		console.log(parsedData);
		callback(parsedData);
	} catch (error) {
		console.error(error.message);
	}
}

export async function FetchArticle(id, callback) {
	try {
		const response = await fetch(`http://localhost:3000/article/${id}`);
		const data = await response.json();

		const article = parser.parseFromString(data.body, "text/html");
		const title = parser.parseFromString(data.title, "text/html");
		const articleHTMLCollection = Array.from(article.body.children);
		const articleArrayString = articleHTMLCollection.map((e) => e.outerHTML);
		const parsedData = {
			body: articleArrayString.toString(),
			title: title.querySelector("h1"),
			id: data.article_id,
		};

		console.log(parsedData);
		callback(parsedData);
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

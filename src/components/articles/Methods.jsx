import parse from "html-react-parser";
const parser = new DOMParser();
export async function fetchArticles(callback) {
	try {
		const response = await fetch("http://localhost:3000/articles");
		const data = await response.json();
		// console.log(data);
		const parsedData = data.map((e) => {
			//	console.log(e);
			const parsedData = {
				body: e.body,
				id: e.article_id,
				prevw_img: e.prevw_img,
			};
			return parsedData;
		});

		// console.log(parsedData);
		callback(parsedData);
	} catch (error) {
		console.error("there has been an error" + error);
	}
}

export async function FetchArticle(id, callback) {
	try {
		const response = await fetch(`http://localhost:3000/article/${id}`);
		const data = await response.json();

		const article = parser.parseFromString(data.body, "text/html");
		const title = parser.parseFromString(data.title, "text/html");
		const articleHTMLCollection = Array.from(article.body.children);
		const articleArrayString = articleHTMLCollection.map((e) => e.outerHTML).join("");
		console.log(articleArrayString);
		const parsedData = {
			body: articleArrayString.toString(),
			id: data.article_id,
		};

		console.log(parsedData);
		callback(parsedData);
	} catch (error) {
		console.error(error.message);
	}
}

export function getTitle(articleBody) {
	const bodyparsed = parser.parseFromString(articleBody, "text/html");
	//console.log(bodyparsed);
	const firstH1 = bodyparsed.querySelector("h1");
	//console.log(firstH1);

	return firstH1.outerHTML;
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

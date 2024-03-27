import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchArticle } from "../components/articles/Methods";
import parse from "html-react-parser";

export function EditArticle() {
	const [article, setArticle] = useState(null);
	const [body, setBody] = useState(null);
	const { articleId } = useParams();
	const parser = new DOMParser();

	useEffect(() => {
		FetchArticle(articleId, setArticle);
	}, []);

	// useEffect(() => {
	// 	if (article) console.log(article.body);
	// }, [article]);

	async function handleSubmit(e) {
		e.preventDefault();
		const title = getTitle();
		try {
			const response = await fetch(`http://localhost:3000/admin/editarticle/${articleId}`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: articleId, body: body, title: title }),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			throw new Error("there has been an error: " + error);
		}
	}

	function getTitle() {
		const bodyparsed = parser.parseFromString(body, "text/html");
		console.log(bodyparsed);
		const firstH1 = bodyparsed.getElementsByTagName("h1");
		console.log(firstH1);

		return firstH1.outerHTML;
	}

	return (
		<form onSubmit={handleSubmit} className="card flex gap-3 flex-column align-items-center">
			<label>Articolo</label>
			{article && (
				<Editor
					value={article.body}
					onTextChange={(e) => {
						console.log(e.htmlValue);
						setBody(e.htmlValue);
					}}
					style={{ height: "320px" }}
				/>
			)}
			<div className="align-items-end">
				<Button label="Salva articolo"></Button>
			</div>
		</form>
	);
}

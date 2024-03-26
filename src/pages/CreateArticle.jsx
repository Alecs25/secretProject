import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { fetchArticles } from "../components/articles/Methods";

export function CreateArticle() {
	const [body, setBody] = useState("");
	const [title, setTitle] = useState("");
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		fetchArticles(setArticles);
	}, []);

	// useEffect(() => {
	// 	console.log(articles);
	// }, [articles]);

	async function handleSubmit(e) {
		e.preventDefault();
		const article = {
			articleBody: body,
			title: title,
			id: articles.length + 1,
		};
		try {
			console.log(article);
			const response = await fetch("http://localhost:3000/createArticle", {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(article),
			});

			fetchArticles(setArticles);
		} catch (error) {}
	}

	return (
		<form onSubmit={handleSubmit} className="card flex gap-3 flex-column align-items-center">
			<label>Titolo</label>
			<InputText value={title} onChange={(e) => setTitle(e.target.value)} />
			<label>Articolo (body)</label>
			<Editor value={body} onTextChange={(e) => setBody(e.htmlValue)} style={{ height: "320px" }} />
			<div className="align-items-end">
				<Button label="Crea articolo"></Button>
			</div>
		</form>
	);
}

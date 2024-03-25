import React, { useContext, useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { ArticlesContext } from "../content/articles/ArticlesLoader";
import { InputText } from "primereact/inputtext";

export function EditorProduct() {
	const [body, setBody] = useState("");
	const articles = useContext(ArticlesContext);
	const [title, setTitle] = useState("");

	async function handleSubmit(e) {
			e.preventDefault();
		const article = {
			articleBody: body,
			title: title,
			id: articles[0].length + 1,
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
			const result = await response.json();
			console.log("Success:", result);
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

import React, { useContext, useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { ArticlesContext } from "../content/articles/ArticlesLoader";
import { InputText } from "primereact/inputtext";

export function EditorProduct() {
	const [body, setBody] = useState("");
	const articles = useContext(ArticlesContext);
	const [title, setTitle] = useState("");

	function handleSubmit(e) {
		try {
			e.preventDefault();
			const article = {
				body: body,
				title: title,
				id: articles[0].length + 1,
			};
			articles[1]([...articles[0], article]);
			console.log(text);
			console.log(articles);
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

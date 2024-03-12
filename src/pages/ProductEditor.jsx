import React, { useContext, useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { ArticlesContext } from "../content/articles/ArticlesLoader";

export function EditorProduct() {
	const [text, setText] = useState("");
	const articles = useContext(ArticlesContext);

	function handleSubmit(e) {
		try {
			e.preventDefault();
			const article = {
				body: text,
			};
			articles[1]([...articles[0], article]);	
			console.log(text);
			console.log(articles);
		} catch (error) {}
	}

	return (
		<form onSubmit={handleSubmit} className="card">
			<Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: "320px" }} />
			<Button label="Mamma"></Button>
		</form>
	);
}

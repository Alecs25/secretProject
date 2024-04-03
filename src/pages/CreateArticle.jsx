import React, { useEffect, useRef, useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { fetchArticles } from "../components/articles/Methods";
import { Toast } from "primereact/toast";
import parse from "html-react-parser";

export function CreateArticle() {
	const [body, setBody] = useState("");
	const [title, setTitle] = useState("");
	const [articles, setArticles] = useState(null);
	const toast = useRef(null);

	const showSuccess = () => {
		toast.current.show({ severity: "success", summary: "Success", detail: "Articolo modificato", life: 3000 });
	};
	useEffect(() => {
		fetchArticles(setArticles);
	}, []);

	// useEffect(() => {
	// 	console.log(articles);
	// }, [articles]);

	async function handleSubmit(e) {
		e.preventDefault();
		//console.log(JSON.stringify(body));
		try {
			const response = await fetch("http://localhost:3000/createArticle", {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					article: body,
				}),
			});
			const data = await response.json();
			showSuccess();
			fetchArticles(setArticles);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="card flex gap-3 flex-column align-items-center">
			<Toast ref={toast} />
			<h2>Crea un nuovo articolo</h2>
			<Editor value={body} onTextChange={(e) => setBody(e.htmlValue)} style={{ height: "320px" }} />
			<div className="align-items-end">
				<Button label="Crea articolo"></Button>
			</div>
		</form>
	);
}

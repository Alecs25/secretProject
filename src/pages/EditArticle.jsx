import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchArticle } from "../components/articles/Methods";
import parse from "html-react-parser";

export function EditArticle() {
	const [article, setArticle] = useState(null);
	const [body, setBody] = useState("");
	const [title, setTitle] = useState(article?.title);

	const { articleId } = useParams();

	useEffect(() => {
		FetchArticle(articleId, setArticle);
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:3000/admin/editarticle/${articleId}`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: articleId, body: JSON.stringify(title), title: JSON.stringify(body) }),
			});
			const data = await response.json();
		} catch (error) {
			throw new Error("there has been an error: " + error);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="card flex gap-3 flex-column align-items-center">
			<label>Titolo</label>
			{article && (
				<InputText value={article.title ? article.title : "Titolo"} onTex={(e) => setTitle(e.htmlValue)} />
			)}
			<label>Articolo (body)</label>
			{article && (
				<Editor
					value={article.body ? article.body : "Testo articolo"}
					onTextChange={(e) => setBody(e.htmlValue)}
					style={{ height: "320px" }}
				/>
			)}
			<div className="align-items-end">
				<Button label="Salva articolo"></Button>
			</div>
		</form>
	);
}

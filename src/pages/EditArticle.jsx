import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { FetchArticle, getTitle } from "../components/articles/Methods";
import parse from "html-react-parser";
import { Toast } from "primereact/toast";

export function EditArticle() {
	const [article, setArticle] = useState(null);
	const [articleBody, setBody] = useState(null);
	const { articleId } = useParams();
	const parser = new DOMParser();
	const toast = useRef(null);
	const showSuccess = () => {
		toast.current.show({ severity: "success", summary: "Success", detail: "Articolo modificato", life: 3000 });
	};

	useEffect(() => {
		FetchArticle(articleId, setArticle);
	}, []);

	useEffect(() => {
		if (article) console.log(article.body);
	}, [article]);

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
				body: JSON.stringify({ id: articleId, body: articleBody, title: title }),
			});
			const data = await response.text();
			if (data) showSuccess();
		} catch (error) {
			throw new Error("there has been an error: " + error);
		}
	}

	
	return (
		<form onSubmit={handleSubmit} className="card flex gap-3 flex-column align-items-center">
			<Toast ref={toast} />
			<label>Articolo</label>
			{article && (
				<Editor
					value={article.body.toString()}
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

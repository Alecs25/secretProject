import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { FetchArticle } from "../components/articles/Methods";
import { Toast } from "primereact/toast";
import parse from "node-html-parser";

export function EditArticle() {
	const [articleData, setArticleData] = useState(null);
	const [articleBody, setArticleBody] = useState(null);
	const { articleId } = useParams();
	const parser = new DOMParser();
	const toast = useRef(null);
	const showSuccess = () => {
		toast.current.show({ severity: "success", summary: "Success", detail: "Articolo modificato", life: 3000 });
	};
	const showError = () => {
		toast.current.show({
			severity: "error",
			summary: "Error",
			detail: "Nessuna modifica effettuata, articolo non aggiornato",
			life: 3000,
		});
	};
	useEffect(() => {
		FetchArticle(articleId, setArticleData);
	}, []);

	function findTitle(body) {
		// console.log(body);

		const h1Found = body.find((p) => (p.rawTagName === "h1" ? p.outerHTML : null));
		// const pWithText = allHFound.find((e) => e !== null);
		// console.log(h1Found.outerHTML);
		return h1Found.outerHTML;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (!articleBody) {
			showError();
			return;
		}
		try {
			const parsedBody = parse(articleBody);
			const title = findTitle(parsedBody.childNodes);
			const response = await fetch(`http://localhost:3000/admin/editarticle/${articleId}`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: articleId, article: { body: articleBody, title: title } }),
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
			{articleData && (
				<Editor
					value={articleData.article.title.toString() + articleData.article.body.toString()}
					onTextChange={(e) => {
						console.log(e.htmlValue);
						setArticleBody(e.htmlValue);
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

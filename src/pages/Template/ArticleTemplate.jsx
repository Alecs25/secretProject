import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";

export function ArticleTemplate() {
	const { articleId } = useParams();
	const [article, setArticle] = useState(null);
	const parser = new DOMParser();

	function findArticle() {
		console.log(typeof articleId);
		return articles[0].find((e) => e.id === Number(articleId));
	}
	useEffect(() => {
		const foundArticle = findArticle();
		setArticle(foundArticle);
	}, [articles]);

	return (
		<main className="card bg-primary text-justify flex flex-column align-items-center p-5">
			{article && <h1>{article.title}</h1>}

			<article className="max-w-full">{article && <h1>{parse(article.body)}</h1>}</article>
		</main>
	);
}

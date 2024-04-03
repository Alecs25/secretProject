import { useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";
import { FetchArticle } from "../../components/articles/Methods";

export function ViewArticle() {
	const { articleId } = useParams();
	const [article, setArticle] = useState(null);

	useEffect(() => {
		FetchArticle(articleId, setArticle);
	}, []);

	useEffect(() => {
		console.log(article);
	}, [article]);

	return (
		<article className="card w-11 m-auto bg-primary text-justify flex flex-column align-items-center p-5">
			{article && parse(article?.title)}

			{article && parse(article?.body)}
		</article>
	);
}

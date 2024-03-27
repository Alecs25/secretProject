import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./ArticlesList.css";
import { fetchArticles, getBody, getTitle } from "./Methods";

export function ArticlesList() {
	const [posts, setPosts] = useState(null);
	const parser = new DOMParser();

	function checkBody(body) {
		//Ritorna la descrizione abbreviata per le card, serve momentaneamente (il json non ha i tag html)
		try {
			const title = getTitle(body);
			const articleBody = getBody(body);

			return { title, articleBody };
			// return body.substring(0, 120).substring(0, body.substring(0, 118).lastIndexOf(" ")) + "...";
			// if (parsedBody?.props) {
			// 	return (
			// 		parsedBody.props.children
			// 			.substring(0, 120)
			// 			.substring(0, parsedBody.props.children.substring(0, 118).lastIndexOf(" ")) + "..."
			// 	);
			// } else return parsedBody.substring(0, 120).substring(0, parsedBody.substring(0, 118).lastIndexOf(" ")) + "...";
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchArticles(setPosts);
	}, []);

	return (
		<div className="flex flex-wrap gap-8">
			{posts &&
				posts.map((e, i) => {
					const body = checkBody(e.body);
					const articleBodyReduced =
						body.articleBody.props.children
							.substring(0, 120)
							.substring(0, body.articleBody.props.children.substring(0, 118).lastIndexOf(" ")) + "...";
					console.log(articleBodyReduced);
					return (
						<div key={i}>
							<Link to={`/article/${e.id}`} className="no-underline">
								<Card
									className="cardHomePage md:w-30rem h-full flex flex-column justify-content-center m-auto align-items-center"
									title={parse(body.title)}
									style={{ backgroundImage: `url(${e.prevw_img})` }}
								>
									<p>{articleBodyReduced}</p>
									<Button
										className="m-auto w-4"
										label="Scopri di più"
										icon="pi pi-angle-right"
										iconPos="right"
									></Button>
								</Card>
							</Link>
						</div>
					);
				})}
		</div>
	);
}

import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./ArticlesList.css";
import { fetchArticles, getTitle } from "./Methods";

export function ArticlesList() {
	const [posts, setPosts] = useState(null);
	const parser = new DOMParser();

	function checkBody(body) {
		//Ritorna la descrizione abbreviata per le card, serve momentaneamente (il json non ha i tag html)
		try {
			// console.log(body);
			// console.log(body);
			const title = getTitle(body);
			// console.log(title);
			// console.log(parsedBody);

			const parsedData = {
				title: title,
				body: body,
			};
			// console.log(parsedData);

			return parsedData;

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
					const parsedTitle = parse(body.title);
					const parsedBody = parse(body.body).slice(1);
					console.log(e);
					return (
						<div key={i}>
							<Link to={`/article/${e.id}`} className="no-underline">
								<Card
									className="cardHomePage md:w-30rem h-full flex flex-column justify-content-center m-auto align-items-center"
									title={parsedTitle}
									style={{ backgroundImage: `url(${e.prevw_img})` }}
								>
									<p className=" mt-3 overflow-hidden text-overflow-ellipsis text-xl">{parsedBody}</p>
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
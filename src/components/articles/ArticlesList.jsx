import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import parse from "node-html-parser";
import { Link } from "react-router-dom";
import "./ArticlesList.css";
import { fetchArticles } from "./Methods";

export function ArticlesList() {
	const [posts, setPosts] = useState(null);
	const parser = new DOMParser();

	useEffect(() => {
		fetchArticles(setPosts);
		console.log();
	}, []);

	function shortDescription(body) {
		body.childNodes.find((e=> e. ))
	}

	return (
		<div className="flex flex-wrap w-11 m-auto justify-content-between gap-6">
			{posts &&
				posts.map((e, i) => {
					{
						/* console.log(e); */
					}
					const bodyParsed = parse(e.article.body);
					const titleToH2 = parse(e.article.title);
					{
						/* console.log(bodyParsed); */
					}

					const firstpReduced = shortDescription(bodyParsed);
					{
						/* firstP.substring(0, 150).substring(0, firstP.substring(0, 150).lastIndexOf(" ")) + "..."; */
					}

					return (
						<div key={i}>
							<Link to={`/article/${e.id}`} className="no-underline">
								<Card
									className="cardHomePage md:w-30rem h-full flex flex-column justify-content-center m-auto align-items-center"
									title=<h2>{titleToH2.innerText}</h2>
									style={{ backgroundImage: `url(${e.prevw_img})` }}
								>
									<p>{firstpReduced}</p>
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

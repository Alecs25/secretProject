import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import parse from "node-html-parser";
import { Link } from "react-router-dom";
import "./ArticlesList.css";
import { fetchArticles } from "./Methods";
import VoidTag from "node-html-parser/dist/void-tag";

export function ArticlesList() {
	const [posts, setPosts] = useState(null);
	const parser = new DOMParser();

	useEffect(() => {
		fetchArticles(setPosts);
		console.log();
	}, []);

	function findFirstP(allP) {
		const allPText = allP.map((p) => (p.firstChild.rawTagName === "br" ? null : p.firstChild._rawText));
		// console.log(allPText);
		const pWithText = allPText.find((e) => e !== null);
		// console.log(pWithText);
		return pWithText;
	}

	function shortDescription(body) {
		const allP = body.querySelectorAll("p"); //.firstChild._rawText
		const firstP = findFirstP(allP);

		console.log(allP);
		const firstPReduced = firstP.substring(0, 150).substring(0, firstP.substring(0, 140).lastIndexOf(" ")) + "...";
		return firstPReduced;
	}

	return (
		<div className="flex flex-wrap w-11 m-auto justify-content-between gap-6">
			{posts &&
				posts.map((e, i) => {
					const bodyParsed = parse(e.article.body, { voidTag: true });
					const titleToH2 = parse(e.article.title);

					const firstpReduced = shortDescription(bodyParsed);

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

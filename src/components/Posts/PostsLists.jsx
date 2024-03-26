import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./PostLists.css";
import { fetchPosts } from "../articles/Methods";

export function PostsLists() {
	const [posts, setPosts] = useState(null);

	function checkBody(body) {
		//Ritorna la descrizione abbreviata per le card, serve momentaneamente (il json non ha i tag html)
		try {
			const parsedBody = parse(body);
			if (parsedBody?.props) {
				return (
					parsedBody.props.children
						.substring(0, 120)
						.substring(0, parsedBody.props.children.substring(0, 118).lastIndexOf(" ")) + "..."
				);
			} else return parsedBody.substring(0, 120).substring(0, parsedBody.substring(0, 118).lastIndexOf(" ")) + "...";
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		const fetchedPosts = fetchPosts();
		setPosts(fetchedPosts);
	}, []);

	return (
		<div className="flex flex-wrap gap-8">
			{posts &&
				posts.map((e, i) => {
					const parsedBody = checkBody(e.body);
					return (
						<div key={i}>
							<Link to={"/product"} className="no-underline">
								<Card
									className="cardHomePage md:w-30rem h-full flex flex-column justify-content-center m-auto align-items-center"
									title={e.title}
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

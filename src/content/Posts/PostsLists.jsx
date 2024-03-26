import { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// import { Image } from "primereact/image";
// import { Chip } from "primereact/chip";
import { ArticlesContext } from "../articles/ArticlesLoader";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
// import { SassColor } from "sass";
// import arrowBtn from "../../assets/angle-small-right.png";
import "./PostLists.css";

export function PostsLists() {
	const [posts, setPosts] = useState(null);
	const articles = useContext(ArticlesContext);

	useEffect(() => {
		async function FetchPosts() {
			try {
				const response = await fetch("http://localhost:3000/articles");
				const data = await response.json();

				if (response.ok) {
					// console.log(data);
					setPosts(data);
					// console.log(posts);
				} else {
					throw new Error("there has been an error");
				}
			} catch (error) {
				console.error(error.message);
			}
		}
		FetchPosts();
	}, []);

	function checkBody(body) {
		try {
			const parsedBody = parse(body);
			if (parsedBody?.props) {
				return (
					parsedBody.props.children
						.substring(0, 120)
						.substring(0, parsedBody.props.children.substring(0, 118).lastIndexOf(" ")) + "..."
				);
			} else return parsedBody.substring(0, 120).substring(0, parsedBody.substring(0, 118).lastIndexOf(" ")) + "...";

			// console.log(parsedBody.props.children);
			// return parsedBody.substring(0, 120).substring(0, parsedBody.substring(0, 118).lastIndexOf(" ")) + "...";
		} catch (error) {
			console.error(error);
		}
		// if (body !== String) {
		// 	return parse(body);
		// } else return body.substring(0, 120).substring(0, e.body.substring(0, 118).lastIndexOf(" ")) + "...";
	}

	return (
		<div className="flex flex-wrap gap-8">
			{posts &&
				posts.map((e, i) => {
					const parsedBody = checkBody(e.body);
					return (
						<div key={i}>
							<Link to={"/product"} className="no-underline">
								<Card className="cardHomePage md:w-30rem h-full flex align-items-center justify-content-center" title={e.title}>
									<p className=" mt-3 overflow-hidden text-overflow-ellipsis text-xl">{parsedBody}</p>
									<div className="flex align-items-center ">
										<Button
											label="Scopri di più"
											icon="pi pi-angle-right"
											iconPos="right"
											className="align-items-end"
										></Button>
									</div>
								</Card>
							</Link>
						</div>
					);
				})}
		</div>
	);
}

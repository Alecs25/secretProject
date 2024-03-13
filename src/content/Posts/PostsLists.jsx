import { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Chip } from "primereact/chip";
import { ArticlesContext } from "../articles/ArticlesLoader";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./PostsLists.css"

export function PostsLists() {
	// const [posts, setPosts] = useState(null);
	const articles = useContext(ArticlesContext);

	// useEffect(() => {
	// 	async function FetchPosts() {
	// 		try {
	// 			const response = await fetch("https://dummyjson.com/posts");
	// 			const data = await response.json();

	// 			if (response.ok) {
	// 				console.log(data);
	// 				setPosts(data.posts);
	// 			} else {
	// 				throw new Error("there has been an error");
	// 			}
	// 		} catch (error) {
	// 			console.error(error.message);
	// 		}
	// 	}
	// 	FetchPosts();
	// }, []);

	return (
		<div className="flex flex-wrap gap-5">
			{articles[0] &&
				articles[0].map((e, i) => (
					<div key={i} style={{ flex: " 1 1 30%" }} className="flex-basis-0 card flex justify-content-center">
						<Link style={{ textDecoration: "none" }} to={`article/` + e.id}>
							<Card  title={e.title}>
								<div className="flex flex-column align-items-center gap-3">
									<p>{parse(e.body)}</p>
									<div className="flex gap-3 justify-content-center">
										<button className="cardBtn">Scopri di più <img src="/secretProject/src/assets/right.png" alt="" /> </button>
									</div>
								</div>
							</Card>
						</Link>
					</div>
				))}
		</div>
	);
}

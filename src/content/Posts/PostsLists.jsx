import { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Chip } from "primereact/chip";
import { ArticlesContext } from "../articles/ArticlesLoader";
import parse from "html-react-parser";




export function PostsLists() {
	// const [posts, setPosts] = useState(null);
	const articles = useContext(ArticlesContext);
	const parser = new DOMParser();
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
					<div key={i} style={{ flex: " 1 1 32%" }} className="flex-basis-0 card flex justify-content-center">
						<Card title={e.title}>
							<Image src="https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg"></Image>
							{parse(e.body)}
							{e.tags && e.tags.map((t) => <Chip label={t}></Chip>)}
						</Card>
					</div>
				))}
		</div>
	);
}

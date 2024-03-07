import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
export function PostsLists() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		async function FetchPosts() {
			try {
				const response = await fetch("https://dummyjson.com/posts");
				const data = await response.json();

				if (response.ok) {
					console.log(data);
					setPosts(data.posts);
				} else {
					throw new Error("there has been an error");
				}
			} catch (error) {
				console.error(error.message);
			}
		}
		FetchPosts();
	}, []);

	return (
			<div className="flex flex-wrap gap-5">
				{posts &&
					posts.map((e, i) => (
						<div key={i} style={{ flex: " 1 1 32%" }} className="flex-basis-0 card flex justify-content-center">
							<Card title={e.title}>
								<Image src="https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg"></Image>
								<p className="m-0">{e.body}</p>
							</Card>
						</div>
					))}
			</div>
	);
}

import { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Chip } from "primereact/chip";
import { ArticlesContext } from "../articles/ArticlesLoader";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { SassColor } from "sass";
import arrowBtn from "../../assets/angle-small-right.png"
import "./PostLists.css"


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
					<div key={i}  className="card-wrapper">
					<Link to={"/product"} className="no-underline">
						<Card title={e.title}>
							<p className="card-description ellipsis"><span className="text-concat">{parse(e.body)}</span></p>
							<div className="flex align-items-center ">
							<button className="cardBtn flex	align-items-center">Scopri di più <img src={arrowBtn} style={{width:"17px"}} />
							 </button>
							</div>
						</Card>
						</Link>
					</div>
				))}
		</div>
	);
}

import { useEffect, useState } from "react";
import { Comment } from "./Comment";
import { Card } from "primereact/card";
import { getComments } from "../../controllers/comment-controller";

export function CommentsList({ article_id }) {
	const [comments, setComments] = useState(null);

	useEffect(() => {
		async function fetchComments() {
			if (article_id) {
				const foundComments = await getComments(article_id);
				console.log(foundComments);
				setComments(foundComments);
			}
		}
		fetchComments();
	}, []);

	// useEffect(() => {
	// 	// console.log(typeof comments);
	// 	// console.log(comments);
	// }, [comments]);

	return (
		<div
			style={{ backgroundColor: "transparent" }}
			className="w-11 m-auto  border-round flex flex-column align-items-center p-5 gap-5"
		>
			{Array.isArray(comments) && comments.map((e, i) => <Comment key={i} data={e} />)}
		</div>
	);
}

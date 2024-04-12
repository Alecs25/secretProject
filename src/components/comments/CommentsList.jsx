import { useContext, useEffect, useState } from "react";
import { Comment } from "./Comment";
import { Card } from "primereact/card";
import { getComments } from "../../controllers/comment-controller";
import { AddComment } from "./AddComment";
import { UserContext } from "../../context/UserContext";

export function CommentsList({ article_id }) {
	const [comments, setComments] = useState(null);
	const { userInfo, isLoggedIn } = useContext(UserContext);
const[newComment, setNewComment] = useState(true)
	async function fetchComments() {
		if (article_id) {
			const foundComments = await getComments(article_id);
			console.log(foundComments);
			setComments(foundComments);
		}
	}
	useEffect(() => {
		setComments(null)
		fetchComments();
	}, [newComment]);

	// useEffect(() => {
	// 	// console.log(typeof comments);
	// 	// console.log(comments);
	// }, [comments]);

	return (
		<div>
			<div>
				<AddComment article_id={article_id} userInfo={userInfo} callback={setNewComment} newComment={newComment} />
			</div>
			<div
				style={{ backgroundColor: "transparent" }}
				className="w-11 m-auto  border-round flex flex-column align-items-center p-5 gap-5"
			>
				{Array.isArray(comments) && comments.map((e, i) => <Comment key={i} data={e} />)}
			</div>
		</div>
	);
}

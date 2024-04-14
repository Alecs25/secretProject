import { useContext, useEffect, useState } from "react";
import { Comment } from "./Comment";
import { Card } from "primereact/card";
import { getReplies } from "../../controllers/comment-controller";
import { AddComment } from "./AddComment";
import { UserContext } from "../../context/UserContext";
import { AddReply } from "./AddReply";
import { Reply } from "./Reply";

export function RepliesList({ data }) {
	const [replies, setReplies] = useState(null);
	const { userInfo, isLoggedIn } = useContext(UserContext);
	const [newReply, setNewReply] = useState(true);

	async function fetchReplies() {
		if (data) {
			const foundReplies = await getReplies(data.article_id, data.comment_id);
			console.log(foundReplies);
			setReplies(foundReplies);
		}
	}

	useEffect(() => {
		console.log(data);
		fetchReplies();
	}, [newReply]);

	useEffect(() => {
		// console.log(typeof comments);
		console.log(replies);
	}, [replies]);

	return (
		<div>
			<div>
				<AddReply data={data} userInfo={userInfo} callback={setNewReply} newReply={newReply} />
			</div>
			<div
				style={{ backgroundColor: "transparent" }}
				className=" m-auto  border-round flex flex-column align-items-center p-3 gap-5"
			>
				{Array.isArray(replies) && replies.map((e, i) => <Reply key={i} data={e} />)}
			</div>
		</div>
	);
}

import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

import { useState } from "react";

import { postComment } from "../../controllers/comment-controller";
export function AddComment({ userInfo, article_id }) {
	const [commentInput, setCommentInput] = useState("");

	async function handleCreateComment(e) {
		e.preventDefault();
		const date = new Date();
		console.log(article_id);
		const response = await postComment({
			username: userInfo.username,
			message: commentInput,
			date: date.toLocaleString(),
			article_id: article_id,
			parent_id: null
		});
		console.log(response);
	}

	return (
		<form
			onSubmit={handleCreateComment}
			style={{ backgroundColor: "transparent" }}
			className="flex m-auto flex-column bg-black-alpha-80 border-round p-2 gap-2 justify-content-start w-7"
		>
			<InputTextarea
				autoResize={true}
				onChange={(e) => setCommentInput(e.target.value)}
				value={commentInput}
				placeholder="Aggiungi un commento..."
			></InputTextarea>
			<div className="card flex justify-content-end">
				<Button label="Rispondi"></Button>
			</div>
		</form>
	);
}

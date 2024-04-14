import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import { postComment, postReply } from "../../controllers/comment-controller";
import { Toast } from "primereact/toast";

export function AddReply({ data, userInfo, callback, newReply }) {
	const [commentInput, setCommentInput] = useState("");
	const toast = useRef(null);

	const showSuccess = () => {
		toast.current.show({
			severity: "success",
			summary: "Operazione effettuata",
			detail: "Commento creato.",
			life: 3000,
		});
	};
	async function handleCreateReply(e) {
		e.preventDefault();
		const date = new Date();
		console.log(userInfo);
		const response = await postReply({
			username: userInfo.username,
			message: commentInput,
			date: date.toLocaleString(),
			article_id: data.article_id,
			parent_id: data.comment_id,
		});
		showSuccess();
		setCommentInput("");
		callback(!newReply);
		console.log(response);
	}

	return (
		<form
			onSubmit={handleCreateReply}
			style={{ backgroundColor: "transparent" }}
			className="flex m-auto flex-column bg-black-alpha-80 border-round p-2 gap-2 justify-content-start w-7"
		>
			<Toast ref={toast} />

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

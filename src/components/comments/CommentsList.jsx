import { useEffect } from "react";
import { Comment } from "./Comment";
import { Card } from "primereact/card";

export function CommentsList() {
	const comments = [
		{ username: "alesss", message: "matteo è strunz" },
		{ username: "alessio", message: "matteo è strunz" },
		{ username: "vitalik", message: "matteo è strunz" },
	];

	useEffect(() => {});

	return (
		<div
			style={{ backgroundColor: "transparent" }}
			className="w-11 m-auto  border-round flex flex-column align-items-center p-5 gap-5"
		>
			
			{comments.map((e, i) => (
				<Comment key={i} data={e} />
			))}
		</div>
	);
}

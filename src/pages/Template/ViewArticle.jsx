import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";
import { FetchArticle } from "../../components/articles/Methods";
import "./ViewArticle.css";
import { CommentsList } from "../../components/comments/CommentsList";
import { Card } from "primereact/card";
import { AddComment } from "../../components/comments/AddComment";
import { UserContext } from "../../context/UserContext";
export function ViewArticle() {
	const { articleId } = useParams();
	const [data, setData] = useState(null);
const {userInfo, isLoggedIn} = useContext(UserContext)

	useEffect(() => {
		FetchArticle(articleId, setData);
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className="flex flex-column gap-5">
			<article className=" border-round card w-11 m-auto bg-primary text-justify flex flex-column align-items-center p-5 article-body">
				{data && parse(data.article.title)}
				{data && parse(data.article.body)}
			</article>
			{isLoggedIn && <AddComment userInfo={userInfo} />}
			<CommentsList />
		</div>
	);
}

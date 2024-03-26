import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { fetchArticles } from "../components/articles/Methods";

export function ArticlesManager() {
	const [articles, setArticles] = useState([]);

	const columns = [
		{ field: "article_id", header: "id" },
		{ field: "title", header: "Title" },
		{ field: "body", header: "Body" },
		{ field: "delete", body: <i className="pi pi-times m-auto"></i>, header: "Delete" },
	];

	useEffect(() => {
		fetchArticles(setArticles);
	}, []);

	async function DeletePost(articleId) {
		console.log(typeof articleId);
		try {
			const response = await fetch(`http://localhost:3000/article/${articleId}`, {
				method: "DELETE",
				body: `{ id: ${articleId} }`,
			});
		} catch (error) {
			throw new Error("there has been an error: " + error);
		}
		fetchArticles(setArticles);
	}

	return (
		<Card className="m-auto w-10 flex flex-column align-items-center">
			<DataTable
				cellSelection
				selectionMode="single"
				onSelectionChange={(e) => {
					if (e.value.cellIndex === 3) DeletePost(e.value.rowData.article_id);
				}}
				paginator
				rows={15}
				rowsPerPageOptions={[5, 15, 25, 50]}
				showGridlines
				value={articles}
				className="w-12"
			>
				{columns.map((col, i) => (
					<Column key={col.field} field={col.field} header={col.header} body={col.body} />
				))}
			</DataTable>
		</Card>
	);
}

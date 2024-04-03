import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { DeletePost, fetchArticles } from "../components/articles/Methods";
import { useNavigate } from "react-router";
import parse from "html-react-parser";

export function ArticlesManager() {
	const navigate = useNavigate();
	const [articles, setArticles] = useState(null);
	const [tick, setTick] = useState(true);

	const columns = [
		{ field: "id", header: "id" },
		{ field: "article.title", header: "Title" },
		{ field: "delete", body: <i className="pi pi-times"></i>, header: "Delete" },
		{ field: "edit", body: <i className="pi pi-wrench"></i>, header: "Modifica" },
	];
	useEffect(() => {
		fetchArticles(setArticles);
	}, [tick]);




	return (
		<Card className="m-auto w-10 flex flex-column align-items-center">
			<DataTable
				cellSelection
				selectionMode="single"
				onSelectionChange={(e) => {
					console.log(e);
					switch (e.value.field) {
						case "delete":
							DeletePost(e.value.rowData.id);
							setTick(!tick);
							break;
						case "edit":
							navigate(`/admin/article/${e.value.rowData.id}`);
							break;
					}
				}}
				paginator
				rows={15}
				rowsPerPageOptions={[5, 15, 25, 50]}
				showGridlines
				value={articles}
			>
				{columns.map((col) => (
					<Column key={col.field} field={col.field} header={col.header} body={col.body} />
				))}
			</DataTable>
		</Card>
	);
}

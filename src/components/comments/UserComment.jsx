import { Avatar } from "primereact/avatar";
import { useEffect, useState } from "react";

export function UserComment({ data }) {
	const [parsedData, setParsedData] = useState(null);

	useEffect(() => {
		setParsedData(JSON.parse(data.comment));
	}, []);

	return (
		parsedData && (
			<div className="flex p-2 align-items-center text-white align-content-center gap-1">
				<Avatar
					label={parsedData?.username?.substring(0, 1).toUpperCase()}
					className="mr-2"
					size="large"
					shape="circle"
				/>

				<p className="font-light">{parsedData.username + " in data " + parsedData.date}</p>
			</div>
		)
	);
}

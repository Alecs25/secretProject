import { RepliesList } from "./RepliesList";
import { UserComment } from "./UserComment";
import { useEffect, useState } from "react";

export function Reply({ data }) {
	const [parsedData, setParsedData] = useState(null);

	useEffect(() => {
		console.log(data);
		setParsedData(JSON.parse(data.comment));
	}, []);

	return (
		parsedData && (
			<div
				style={{ backgroundColor: "transparent" }}
				className="flex flex-column bg-black-alpha-30 border-round p-2 gap-2 justify-content-start w-11"
			>
				<div>
					<UserComment data={data} />
				</div>
				<div className=" border-round p-3">
					<p>{parsedData.message}</p>
				</div>
				<div>
					<RepliesList data={data} />
				</div>
			</div>
		)
	);
}

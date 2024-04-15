import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { UserComment } from "./UserComment";
import { useEffect, useState } from "react";
import { AddReply } from "./AddReply";
import { Reply } from "./Reply";
import { RepliesList } from "./RepliesList";
import { Profile } from "../../pages/Profile";

export function Comment({ data }) {
	const [parsedData, setParsedData] = useState(null);

	useEffect(() => {
		setParsedData(JSON.parse(data.comment));
	}, [])
	return (
		parsedData && (
			<div
				style={{ backgroundColor: "transparent" }}
				className="flex flex-column bg-black-alpha-80 border-round p-2 gap-2 justify-content-start w-7"
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

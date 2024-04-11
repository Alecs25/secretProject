import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { UserComment } from "./UserComment";

export function Comment({ data }) {
	return (
		<div style={{backgroundColor: "transparent"}} className="flex flex-column bg-black-alpha-80 border-round p-2 gap-2 justify-content-start w-7">
			<div>
				<UserComment data={data} />
			</div>
			<div className=" border-round p-3">
				<p>{data.message}</p>
			</div>
		</div>
	);
}

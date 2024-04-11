import { Avatar } from "primereact/avatar";

export function UserComment({ data }) {
	return (
		<div  className="flex p-2 align-items-center text-white align-content-center gap-1">
			<Avatar label={data.username.substring(0, 1).toUpperCase()} className="mr-2" size="large" shape="circle" />

			<p className="font-light">{data.username} • 3 ore fa</p>
		</div>
	);
}

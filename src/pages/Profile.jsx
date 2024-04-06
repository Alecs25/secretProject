import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

export function Profile() {
	return (
		<Card>
			<div className="card flex justify-content-center">
				<div className="flex flex-column gap-2">
					<label htmlFor="username">Username</label>
					<InputText disabled={true} id="username" value="daiodaw" />
				</div>
			</div>
		</Card>
	);
}

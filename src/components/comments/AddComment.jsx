import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from "primereact/button";
export function AddComment() {
	return (
		<div
			style={{ backgroundColor: "transparent" }}
			className="flex m-auto flex-column bg-black-alpha-80 border-round p-2 gap-2 justify-content-start w-7"
		>
			<InputTextarea autoResize={true} placeholder="Aggiungi un commento..."></InputTextarea>
			<div className="card flex justify-content-end">
				<Button label="Rispondi"></Button>
			</div>
		</div>
	);
}

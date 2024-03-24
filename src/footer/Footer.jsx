import { Image } from "primereact/image";

export function Footer() {
	return (
		<div className="flex justify-content-center gap-5">

			<div className="flex-1 bg-primary font-bold text-center p-4 border-round ">
				<Image src="https://primefaces.org/cdn/primereact/images/logo.png" width="96px"></Image>
				<div className="flex justify-content-center gap-5">
					<p>Chi siamo</p>
					<p>Contatti</p>
					<p>Iscriviti</p>
				</div>
				<div></div>
			</div>
			
		</div>
	);
}

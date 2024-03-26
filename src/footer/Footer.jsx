import { Image } from "primereact/image";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<div className="flex justify-content-center gap-5">

			<div className="flex-1 bg-primary font-bold text-center p-4 border-round ">
				<Image src="https://primefaces.org/cdn/primereact/images/logo.png" width="96px"></Image>
				<div className="flex justify-content-center gap-5">
					<Link to="/chiSiamo"><p className=" text-xl text-black-alpha-90 hover:text-cyan-700 ">Chi siamo</p></Link>
					<p className="text-xl text-black-alpha-90 hover:text-cyan-700 ">Contatti</p>
					<p className=" text-xl text-black-alpha-90 hover:text-cyan-700 ">Iscriviti</p>
				</div>
				<div></div>
			</div>
			
		</div>
	);
}

import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "../footer/footer.css"

export function Footer() {
	return (
		<div className="flex justify-content-center gap-5">
			<div className="flex-1 shadow-7 font-bold text-center p-4 border-round-2xl max-w-2 bg-primary">
				<Image src={logo} width="200px"></Image>
				<div className="flex justify-content-center">
					<Link to="/chiSiamo" className="no-underline">
						<p className=" text-xl text-white hover:text-cyan-700 ">Chi siamo</p>
					</Link>
				</div>
				<div></div>
			</div>
		</div>
	);
}

import { Carousel } from "primereact/carousel";
import images from "./Images";
import "../Carousel/CarouselHome.css"
export function CarouselHome() {
	const productTemplate = (image) => {
		return (
			<div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
				<div className="mb-3">
					 <a href={image.href} className="carousel-Link">
					<img src={image.src} className="w-6  shadow-2">
					</img>
					<h1 className="carousel-Title">{image.title}</h1>
					<p className="carousel-Description">{image.description}</p>
					 </a>
				</div>
			</div>
		);
	};
	return <Carousel value={images} numScroll={1} numVisible={1} itemTemplate={productTemplate} />;
}
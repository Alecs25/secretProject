import { Carousel } from "primereact/carousel";
import "../Carousel/CarouselHome.css"
export function CarouselHome(Img) {
		const productTemplate = (image) => {
		return (
			<div className="m-2 text-center py-5 px-3">
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
	return <Carousel value={Img.Img} numScroll={1} numVisible={1} itemTemplate={productTemplate} />;
}
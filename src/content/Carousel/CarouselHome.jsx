import { Carousel } from "primereact/carousel";

export function CarouselHome() {
	const images = [
		{ id: 1, src: "https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg" },
		{ id: 2, src: "https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg" },
		{ id: 3, src: "https://picsum.photos/536/354" },
	];

	const productTemplate = (image) => {
		return (
			<div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
				<div className="mb-3">
					<img src={image.src} className="w-6 shadow-2" />
				</div>
			</div>
		);
	};

	return <Carousel value={images} numScroll={1} numVisible={1} itemTemplate={productTemplate} />;
}

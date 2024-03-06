import { CarouselHome } from "./Carousel/CarouselHome.jsx";

export function Body() {
	return (
		<div className="flex justify-content-center	">
			<div className="flex-3 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
			<div className="flex-6 h-4rem text-center p-4 border-round mx-4">
				<CarouselHome />
			</div>
			<div className="flex-3 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
		</div>
	);
}

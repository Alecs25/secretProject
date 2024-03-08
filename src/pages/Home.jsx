import { CarouselHome } from "../content/Carousel/CarouselHome";
import { PostsLists } from "../content/Posts/PostsLists";

export function Home() {
	return (
		<div className="flex justify-content-center">
			<div className=" w-3 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
			<div className="w-7 h-4rem text-center p-4 border-round mx-4">
				<CarouselHome />
				<PostsLists />
			</div>
			<div className="w-3 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
		</div>
	);
}

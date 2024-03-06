import { CarouselHome } from "../content/Carousel/CarouselHome";
import { PostsLists } from "../content/Posts/PostsLists";
import { Header } from "../header/Header";


export function Home() {
	return (
		<div>
			<Header />
			<div className="flex justify-content-center	">
				<div className="flex-3 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
				<div className="flex-6 h-4rem text-center p-4 border-round mx-4">
					<CarouselHome />
					<PostsLists />
				</div>
				<div className="flex-3 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
			</div>{" "}
		</div>
	);
}

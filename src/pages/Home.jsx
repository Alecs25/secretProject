import { CarouselHome } from "../content/Carousel/CarouselHome";
import { PostsLists } from "../content/Posts/PostsLists";
import { LoginModal } from "../content/SignUp/loginModal";

export function Home() {
	return (
		<div className="flex justify-content-center">
			<div className="w-3 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
			<div className="w-8  text-center p-4 border-round mx-4">
				<CarouselHome />
			</div>
			<div className="w-3 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
		</div>
	);
}

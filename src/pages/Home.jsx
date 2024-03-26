import { CarouselHome } from "../components/Carousel/CarouselHome";
import { ArticlesList } from "../components/articles/ArticlesList";
// import { LoginModal } from "../components/SignUp/loginModal";

export function Home() {
	return (
		<div className="flex justify-content-center">
			<div className="w-3 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
			<div className="text-center p-4 border-round mx-4">
				<CarouselHome />
				<ArticlesList />
			</div>
			<div className="w-3 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
		</div>
	);
}

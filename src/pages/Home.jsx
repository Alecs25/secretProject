import { CarouselHome } from "../components/Carousel/CarouselHome";
import { ArticlesList } from "../components/articles/ArticlesList";
// import { LoginModal } from "../components/SignUp/loginModal";

export function Home() {
	return (
		<div className="flex m-auto justify-content-center">
			<div className="m-auto text-center flex flex-column align-content-center p-4 border-round mx-4">
			 <CarouselHome /> 
				<ArticlesList />
			</div>
		</div>
	);
}

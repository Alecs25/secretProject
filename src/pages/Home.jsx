import { CarouselHome } from "../content/Carousel/CarouselHome";
import { PostsLists } from "../content/Posts/PostsLists";
import TemplateDemo from "../header/Header";
import { useState, useEffect } from "react";
import "../index.css"
import { Link } from "react-router-dom";
export function Home() {
	const current_theme = localStorage.getItem("current_theme")
const [theme, setTheme]=useState(current_theme ? current_theme : "light")
useEffect(()=>{
localStorage.setItem("current_theme", theme )
},[theme])
	return (
		<div className={`mainContainer ${theme}`} >
			<TemplateDemo theme={theme} setTheme={setTheme} />
			<div className="flex justify-content-center	">
				<div className="flex-3 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
				<div className="flex-6 h-4rem text-center p-4 border-round mx-4">
					<CarouselHome />
					<PostsLists/>	
					<Link to="/product">product</Link>
				</div>
				<div className="flex-3 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
			</div>
		</div>
	);
}

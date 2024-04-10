import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Xbox/ConsoleCard.css"
import { CarouselHome } from "../../../components/Carousel/CarouselHome";
import Nintendo from "./Nintendo.js";
export function NintendoPage(){
    const [post , setPost] =useState(null)
 async function fetchNintendoData(){
    const response = await fetch("https://cardapi2-02798e21d521.herokuapp.com/api/oggetti")
    const data = await response.json()
    setPost(data)
 }
 useEffect(()=>{
	fetchNintendoData()
 },[])
 	function shortDescription(body) {
		const firstPReduced = body.substring(0, 150).substring(0, body.substring(0, 140).lastIndexOf(" ")) + "...";
		return firstPReduced;
	}
    return (
		<div className="flex flex-wrap w-11 m-auto justify-content-between gap-6">
            <CarouselHome Img={Nintendo}></CarouselHome>
			{post &&
				post.map((e, i) => {
					const firstpReduced = shortDescription(e.descrizione);
					return (
						<div key={i}>
							<Link to={e.link} className="no-underline">
								<Card
									className="cardHomePage md:w-30rem h-full flex flex-column justify-content-center m-auto align-items-center"
									title=<h2>{e.titolo}</h2>
									style={{ backgroundImage: `url(${e.immagine})`, backgroundPosition:"center"}}>
									<p>{firstpReduced}</p>
									<Button
										className="m-auto w-4"
										label="Scopri di più"
										icon="pi pi-angle-right"
										iconPos="right"
									></Button>
								</Card>
							</Link>
						</div>
					);
				})}
		</div>
	);
}
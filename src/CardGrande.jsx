import { Link } from "react-router-dom";
import useSWR from "swr";
import classes from "./CardGrande.module.scss"
export function CardGrande({ item }) {
    const {data, error} = useSWR(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
    console.log(data)
    
    return (
        <div className={classes.divcard}>
            {error && <h1>Errore durantre il caricamento {error.message}</h1>}
            {data && <div className={classes.divcard1}>
                
                <div className={classes.title}>
                    <h1 className={classes.title1}>{data.name}</h1>
                </div>
                <div className={classes.immage0991}>
                    <img src={data.sprites.front_default} alt={item.name} width={180}/>
                </div>
                <div className={classes.description}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam?</h2>
                </div>
                <div className={classes.buttondiv}>
                    <Link to={`/card/${data.name}`}>
                        <button className={classes.buttonbutton}>Scopri di piu!</button>
                    </Link>
                </div>
            </div>}
        </div>
    );
}
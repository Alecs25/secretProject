import useSWR from "swr";
import { CardGrande } from "./CardGrande";
import classes from "./CardFetchData.module.scss"
export function CardFetchData(){

    const {data, error} = useSWR(`https://pokeapi.co/api/v2/pokemon/`)
    return (
        <div className={classes.divbigmama}>
            {error && <h1>Errore durantre il caricamento {error.message}</h1>}
            <div className={classes.divcardconteiner}>
            {data && data.results.map((item, index) => (
                <CardGrande key={index} item={item} />
            ))}
            </div>
        </div>
    )
}
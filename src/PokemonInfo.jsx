import { Link, useParams } from "react-router-dom"
import useSWR from "swr"
export function PokemonInfo(){
    const {name} = useParams()
    const {data, error, isLoading} = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`)
    console.log(data)
    return(
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Errore {error.message}</h1>}
            {data && <div>
                <h1>{data.name}</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, distinctio.</h1>
                <Link to="/card"><button>Back</button></Link>
            </div>}
        </div>
    )
}
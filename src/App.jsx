import { Link, Route, Routes } from "react-router-dom";
import { Conteiner } from "./Conteiner";
import { CardFetchData } from "./CardFetchData";
import { PokemonInfo } from "./PokemonInfo";  
export function App(){
    return (
        <Conteiner title={<div>
            <h1>My Awesome App</h1>
            <div>
                <Link to="/card">Card</Link>
            </div>
        </div>}>
            <Routes>
                
                <Route path="/card" element={<CardFetchData/>}/>
                <Route path="/card/:name" element={<PokemonInfo />}/>

            </Routes>
        </Conteiner>    
        
         
    )
}

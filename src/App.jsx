import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
import { Conteiner } from "./Conteiner";
import { ShowGithubUser } from "./GitHubUser"
import { GithubUserList } from "./GitHubUserList";
import { Catalogue } from "./Catalog";
import { Product } from "./Product";
import { GithubUsers } from "./DataFetchingwithfetchanduseEffect-2";
import { NotFound } from "./NotFound";
import { GitHubUsers } from "./GitHubUsers";
import { MyForm } from "./MyForm";
import { Card } from "./Card";
import { Login } from "./Login";
import { StrMeal } from "./StrMeal";
import { PokemonApi } from "./Checkpoint";
import { CardFetchData } from "./CardFetchData";


        
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

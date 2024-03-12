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
import { PokemonInfo } from "./PokemonInfo";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        
export function App(){
    return (
        <Conteiner title={<div>
            <h1>My Awesome App</h1>
            <div>
                <Link to="/">Home</Link> | <Link to="/Counter">Counter</Link> | <Link to="/Welcome">Welcome</Link> | <Link to="/products">Products</Link> | <Link to="/users">Users</Link> | <Link to="/users:username">/users:username</Link> | <Link to="gitusers">GitUsers</Link> | <Link to="/form">Form</Link> | <Link to="/fetch">Fetch</Link> | <Link to="/Login">Login</Link> | <Link to="/meal">Meal</Link> | <Link to="/pokemon">Pokemon</Link> | <Link to="/card">Card</Link>
            </div>
        </div>}>
            <Routes>
                <Route path="/users:username" element={<GithubUsers username="matteo"/>}/>
                <Route path="/Welcome" element={<Welcome/>}/>
                <Route path="/Counter" element={<Counter/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="gitusers" element={<GitHubUsers/>}/>
            

                <Route path="/products" element={<Catalogue/>}>
                    <Route index element={<p>Select a product</p>}/>
                    <Route path=":id" element={<Product/>}/>
                </Route>


                <Route path="/users" element={<GithubUserList/>}>
                    <Route index element={<h1>Select a user</h1>}/>
                    <Route path="/users/:user" element={<ShowGithubUser/>}/>
                </Route>

                <Route path="/form" element={<MyForm/>}/>
                <Route path="/fetch" element={<Card/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/meal" element={<StrMeal/>}/>
                <Route path="/pokemon" element={<PokemonApi/>}/>


                <Route path="/card" element={<CardFetchData/>}/>
                <Route path="/card/:name" element={<PokemonInfo />}/>

            </Routes>
        </Conteiner>    
        
         
    )
}

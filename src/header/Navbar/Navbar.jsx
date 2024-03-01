import React from "react";
import "./Navbar.css"
import logo_light from "../Assets/home.png"
import logo_dark from "../Assets/home-b.png"
import toggle_light from "../Assets/day.png"
 import toggle_dark from "../Assets/night.png"
 import search_light from "../Assets/search-w.png"
import search_dark from "../Assets/search-b.png"

export function Navbar({theme, setTheme}){
    const toggle_mode=()=>{
        theme == "dark" ? setTheme("light") : setTheme("dark")
    }
    return(
        <div className="navContainer">
             <img src={theme == "dark" ? logo_light : logo_dark} alt="" className="logo"/> 
            <ul className="navItemList">
                <li className="navItem">Home</li>
                <li className="navItem">Console</li>
                <li className="navItem">News</li>
                <li className="navItem">Accedi</li>
            </ul>
            <div className="navSearch">
                <input type="text" placeholder="Search" />
                <img src={theme == "dark" ? search_dark : search_light} alt="" />
            </div>
            <img onClick={()=>{toggle_mode()}}src={theme == "dark" ? toggle_light : toggle_dark} className="toggle-icon" />
        </div>
    )
}
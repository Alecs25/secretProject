import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Navigation.jsx";
const current_theme = localStorage.getItem("current_theme")
const [theme , setTheme]= useState(current_theme ? current_theme: "light")
useEffect((
localStorage
),[theme])
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navigation />
		</BrowserRouter>
	</React.StrictMode>
);

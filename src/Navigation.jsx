import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "/node_modules/primeflex/primeflex.css";
import { Product } from "./product/Product";

export function Navigation() {
	return (
		<PrimeReactProvider>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/posts" element={<Home />}></Route>
				<Route path="/product" element={<Product/>}/>
			</Routes>
		</PrimeReactProvider>
	);
}

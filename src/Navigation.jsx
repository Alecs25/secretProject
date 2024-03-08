import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Header } from "./header/Header";
import { Product } from "./product/Product";

export function Navigation() {
	return (
		<PrimeReactProvider>
			<div className="flex flex-column  m-auto justify-content-center gap-5 w-10">
				<Header />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="product" element={<Product/>}/>
				</Routes>
			</div>
		</PrimeReactProvider>
	);
}

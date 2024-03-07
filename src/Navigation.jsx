import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";

export function Navigation() {
	return (
		<PrimeReactProvider>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/posts" element={<Home />}></Route>
			</Routes>
		</PrimeReactProvider>
	);
}

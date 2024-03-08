import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Header } from "./header/Header";

export function Navigation() {
	return (
		<PrimeReactProvider>
			{/* La width  dei componenti (header, body e footer) è gestita qui, w-10 indica una width del 83.33% 
			il width dei componenti dentro questo div si baserà sul 83.33% della viewport*/}
			<div className="flex flex-column  m-auto justify-content-center gap-5 w-10">
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</div>
		</PrimeReactProvider>
	);
}

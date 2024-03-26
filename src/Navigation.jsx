import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Header } from "./components/header/Header";
import { Product } from "./pages/Product";
import { Footer } from "./components/footer/Footer";
import { CreateArticle } from "./pages/CreateArticle";
import { Login } from "./pages/Login";
import { ViewArticle } from "./pages/Template/ViewArticle";
import { ArticlesManager } from "./pages/ArticlesManager";
import { ChiSiamo } from "./pages/Chi_siamo";

export function Navigation() {
	return (
		<PrimeReactProvider>
			{/* La width  dei componenti (header, body e footer) è gestita qui, w-10 indica una width del 83.33% 
			il width dei componenti dentro questo div si baserà sul 83.33% della viewport*/}
			<div style={{ position: "relative" }} className="flex flex-column  m-auto justify-content-center gap-5">
				{/* ▼ Rendering del header ▼ */}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product" element={<Product />} />
					<Route path="/login" element={<Login />} />
					<Route path="/editor" element={<CreateArticle />} />
					<Route path="/articlemanager" element={<ArticlesManager />} />
					<Route path="/article/:articleId" element={<ViewArticle />} />
					<Route path="/chiSiamo" element={<ChiSiamo />} />
				</Routes>
				<Footer />
			</div>
		</PrimeReactProvider>
	);
}

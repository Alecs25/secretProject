import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Header } from "./header/Header";
import { Product } from "./pages/Product";
import { Footer } from "./footer/Footer";
import { EditorProduct } from "./pages/ProductEditor";
import { ArticlesLoader } from "./content/articles/ArticlesLoader";
import { Login } from "./pages/Login";
import { ArticleTemplate } from "./pages/Template/ArticleTemplate";
import { ArticlesManager } from "./pages/ArticlesManager";

export function Navigation() {
	return (
		<PrimeReactProvider>
			{/* La width  dei componenti (header, body e footer) è gestita qui, w-10 indica una width del 83.33% 
			il width dei componenti dentro questo div si baserà sul 83.33% della viewport*/}
			<div style={{ position: "relative" }} className="flex flex-column  m-auto justify-content-center gap-5">
				{/* ▼ Rendering del header ▼ */}
				<Header />
				<ArticlesLoader>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/product" element={<Product />} />
						<Route path="/login" element={<Login />} />
						<Route path="/editor" element={<EditorProduct />} />
						<Route path="/articlemanager" element={<ArticlesManager />} />
						<Route path="/article/:articleId" element={<ArticleTemplate />} />
					</Routes>
					<Footer />
				</ArticlesLoader>
			</div>
		</PrimeReactProvider>
	);
}

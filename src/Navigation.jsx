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

export function Navigation() {
	return (
		<PrimeReactProvider>
			<ArticlesLoader>
				<div className="flex flex-column m-auto justify-content-center gap-5 w-10">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/product" element={<Product />} />
						<Route path="/login" element={<Login />} />
						<Route path="/editor" element={<EditorProduct />} />
						<Route path="/article/:articleId"  element={<ArticleTemplate />} />
					</Routes>
					<Footer />
				</div>
			</ArticlesLoader>
		</PrimeReactProvider>
	);
}

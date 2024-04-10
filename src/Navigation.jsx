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
import { EditArticle } from "./pages/EditArticle";
import backgroundHome from "./assets/images/backgroundHome/background.jpg";
import { useContext, useEffect, useRef } from "react";
import { Profile } from "./pages/Profile";
import { XboxPage } from "./pages/Console/Xbox/Xbox.jsx";
import { PlayStationPage } from "./pages/Console/PlayStation/Playstation.jsx";
import { NintendoPage } from "./pages/Console/Nintendo/Nintendo.jsx";
import { PCWindowsPage } from "./pages/Console/PC Windows/PCWindows.jsx";
import { Toast } from "primereact/toast";
import { UserContext } from "./context/UserContext.jsx";
export function Navigation() {
	const { toast } = useContext(UserContext);

	var styles = {
		body: {
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundImage: `url(${backgroundHome})`,
		},
	};

	useEffect(() => {
		for (let i in styles.body) {
			document.body.style[i] = styles.body[i];
		}
		return () => {
			for (let i in styles.body) {
				document.body.style[i] = null;
			}
		};
	});

	return (
		<PrimeReactProvider>
			{/* La width  dei componenti (header, body e footer) è gestita qui, w-10 indica una width del 83.33% 
			il width dei componenti dentro questo div si baserà sul 83.33% della viewport*/}
			{/* ▼ Rendering del header ▼ */}

			<div
				style={{
					position: "relative",
				}}
				className="flex flex-column m-auto justify-content-center gap-5"
			>
				<Toast ref={toast} />

				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Xbox" element={<XboxPage />}></Route>
					<Route path="/PlayStation" element={<PlayStationPage />}></Route>
					<Route path="/Nintendo" element={<NintendoPage />}></Route>
					<Route path="/PCWindows" element={<PCWindowsPage />}></Route>
					<Route path="/product" element={<Product />} />
					<Route path="/login" element={<Login />} />
					<Route path="/createarticle" element={<CreateArticle />} />
					<Route path="/articlemanager" element={<ArticlesManager />} />
					<Route path="/article/:articleId" element={<ViewArticle />} />
					<Route path="/chiSiamo" element={<ChiSiamo />} />
					<Route path="/admin/article/:articleId" element={<EditArticle />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
				</Routes>
				<Footer />
			</div>
		</PrimeReactProvider>
	);
}

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Navigation.jsx";
import { UserContext, UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<Navigation />
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);

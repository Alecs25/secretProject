import { createContext, useEffect, useRef, useState } from "react";
import { logIn } from "../controllers/user-controller";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const toast = useRef(null);

	const showError = (message) => {
		toast.current.show({ severity: "error", summary: "Error", detail: message, life: 3000 });
	};
	const showSuccess = (message) => {
		toast.current.show({ severity: "success", summary: "Success", detail: message, life: 3000 });
	};
	useEffect(() => {
		const userStorage = JSON.parse(localStorage.getItem("userinfo"));
		console.log(userStorage);
		if (userStorage?.token) {
			setUserInfo(userStorage);
			setIsLoggedIn(true);
		}
	}, []);

	async function loginContext(username, password) {
		const user = await logIn({ username: username, password: password });
		if (user.token) {
			localStorage.clear("userinfo");
			setUserInfo(user);
			setIsLoggedIn(true);
			localStorage.setItem("userinfo", JSON.stringify(user));
			showSuccess("Login successful");
			return user;
		}

		return null;
	}

	const logout = () => {
		setIsLoggedIn(false);
		setUserInfo(null);
		localStorage.clear("userinfo");
	};

	return (
		<UserContext.Provider value={{ userInfo, loginContext, isLoggedIn, logout, toast, showError, showSuccess }}>
			{children}
		</UserContext.Provider>
	);
};

import { createContext, useEffect, useState } from "react";
import { logIn } from "../controllers/user-controller";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

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
		//console.log(user);
		if (user.token) {
			localStorage.clear("userinfo");
			setUserInfo(user);
			setIsLoggedIn(true);
			localStorage.setItem("userinfo", JSON.stringify(user));

			return user;
		}

		return null;
	}

	const logout = () => {
		setIsLoggedIn(false);
		localStorage.clear("userinfo");
	};

	return <UserContext.Provider value={{ userInfo, loginContext, isLoggedIn, logout }}>{children}</UserContext.Provider>;
};

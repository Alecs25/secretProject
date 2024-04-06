import { createContext, useState } from "react";
import { logIn } from "../controllers/user-controller";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	async function loginContext(username, password) {
		const user = await logIn({ username: username, password: password });
		console.log(user)
		setUserInfo(user);
		if(user.token){
			setIsLoggedIn(true);
			return user
		}
		
		return null
	}

	const logout = () => {
		setIsLoggedIn(false);
	};

	return <UserContext.Provider value={{ userInfo, loginContext, isLoggedIn, logout }}>{children}</UserContext.Provider>;
};

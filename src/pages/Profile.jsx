import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export function Profile() {
	const { userInfo, loginContext, isLoggedIn, logout } = useContext(UserContext);
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const toast = useRef(null);

	const showError = () => {
		toast.current.show({ severity: "error", summary: "Error", detail: "Credenziali non valida", life: 3000 });
	};

	// useEffect(() => {
	// 	if (!userInfo?.token) {
	// 		showError();
	// 	}
	// }, [userInfo]);

	async function handleLogin(e) {
		e.preventDefault();
		const user = await loginContext(usernameInput, passwordInput);
		console.log(user)
		user === null ? showError() : ""
	}

	return (
		<Card>
			<Toast ref={toast} />
			{isLoggedIn && userInfo && (
				<div className="card flex justify-content-center">
					<div className="flex flex-column gap-2">
						<label htmlFor="username">Username</label>
						<InputText disabled={true} id="username" value={userInfo.username} />
						<label htmlFor="isAdmin">Tipo utente</label>
						<InputText disabled={true} id="isAdmin" value={userInfo.isAdmin} />
					</div>
				</div>
			)}

			{!isLoggedIn && (
				<div className="card flex justify-content-center">
					<form className="flex flex-column gap-3" onSubmit={handleLogin}>
						<label htmlFor="username"></label>
						<InputText
							placeholder="Username"
							onChange={(e) => setUsernameInput(e.target.value)}
							value={usernameInput}
						></InputText>
						<label htmlFor="password"></label>
						<InputText
							placeholder="Password"
							onChange={(e) => setPasswordInput(e.target.value)}
							value={passwordInput}
						></InputText>
						<Button className="w-5 align-self-end" onClick={handleLogin} label="Login"></Button>
					</form>
				</div>
			)}
		</Card>
	);
}

import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Avatar } from "primereact/avatar";
import { signUp } from "../controllers/user-controller";

export function Profile() {
	const { userInfo, loginContext, isLoggedIn, logout } = useContext(UserContext);
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [usernameSignup, setUsernameSignup] = useState("");
	const [passwordSignup, setPasswordSignup] = useState("");
	const toast = useRef(null);

	const showError = () => {
		toast.current.show({ severity: "error", summary: "Error", detail: "Credenziali non valida", life: 3000 });
	};

	const showErrorSignUp = (message) => {
		toast.current.show({ severity: "error", summary: "Error", detail: message, life: 3000 });
	};

	async function handleLogin(e) {
		e.preventDefault();
		const user = await loginContext(usernameInput, passwordInput);
		console.log(user);
		user === null ? showErrorSignUp() : "";
	}

	async function handleSignup(e) {
		e.preventDefault();
		const user = await signUp({ username: usernameSignup, password: passwordSignup });
		console.log(user);
		user === null ? showError() : "";
	}

	return (
		<Card>
			<div className="flex justify-content-evenly">
				<Toast ref={toast} />
				{/* PROFILO DA LOGGATO */}
				{isLoggedIn && userInfo && (
					<div className="card flex justify-content-center">
						<Avatar
							label={userInfo.username.substring(0, 1).toUpperCase()}
							className="mr-2"
							size="xlarge"
							shape="circle"
						/>
						<div className="flex flex-column gap-2">
							<label htmlFor="username">Username</label>
							<InputText disabled={true} id="username" value={userInfo.username} />
							<label htmlFor="isAdmin">Tipo utente</label>
							<InputText disabled={true} id="isAdmin" value={userInfo.isAdmin === 1 ? "Admin" : "User"} />
							<Button onClick={logout}>Logout</Button>
						</div>
					</div>
				)}

				{/* REGISTRATI */}
				{!isLoggedIn && (
					<div className="card flex justify-content-center">
						<form className="flex flex-column gap-3" onSubmit={handleSignup}>
							<h3>Registrati</h3>
							<label htmlFor="usernameSignup">Username</label>
							<InputText
								id="usernameSignup"
								placeholder="Username"
								onChange={(e) => setUsernameSignup(e.target.value)}
								value={usernameSignup}
							></InputText>
							<label htmlFor="passwordSignup">Password</label>
							<InputText
								id="passwordSignup"
								placeholder="Password"
								onChange={(e) => setPasswordSignup(e.target.value)}
								value={passwordSignup}
							></InputText>
							<Button className="w-5 align-self-end" label="Registrati"></Button>
						</form>
					</div>
				)}
				{/* LOGIN */}
				{!isLoggedIn && (
					<div className="card flex justify-content-center">
						<form className="flex flex-column gap-3" onSubmit={handleLogin}>
							<h3>Login</h3>

							<label htmlFor="username">Username</label>
							<InputText
								placeholder="Username"
								onChange={(e) => setUsernameInput(e.target.value)}
								value={usernameInput}
							></InputText>
							<label htmlFor="password">Password</label>
							<InputText
								placeholder="Password"
								onChange={(e) => setPasswordInput(e.target.value)}
								value={passwordInput}
							></InputText>
							<Button className="w-5 align-self-end" label="Login"></Button>
						</form>
					</div>
				)}
			</div>
		</Card>
	);
}

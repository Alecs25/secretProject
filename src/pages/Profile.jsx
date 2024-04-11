import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Avatar } from "primereact/avatar";
import { signUp } from "../controllers/user-controller";
import "../pages/profile.css" 


export function Profile() {
	const { userInfo, loginContext, isLoggedIn, logout } = useContext(UserContext);
	const [loginInput, setLoginInput] = useState({ username: "", password: "" });
	const [signUpInput, setSignUpInput] = useState({ username: "", password: "" });
	const toast = useRef(null);
	const showError = (toast, message) => {
		toast.current.show({ severity: "error", summary: "Error", detail: message, life: 3000 });
	};
	const showSuccess = (toast, message) => {
		toast.current.show({ severity: "success", summary: "Success", detail: message, life: 3000 });
	};
	const resetStates = () => {
		setLoginInput({ username: "", password: "" });
		setSignUpInput({ username: "", password: "" });
	};

	console.log(userInfo)

	async function handleLogin(e) {
		e.preventDefault();
		const user = await loginContext(loginInput.username, loginInput.password);
		console.log(user);
		user === null ? showError(toast, "Credenziali non valide") : resetStates();
	}

	async function handleSignup(e) {
		e.preventDefault();
		const user = await signUp({ username: signUpInput.username, password: signUpInput.password });
		console.log(user.response);
		if (user.response.status === 200) {
			showSuccess(toast, "Registrazione effettuata con successo.");
			resetStates();
		} else {
			showError(user.data.msg);
		}
	}

	return (
		<Card className="bg-primary">
			<div className="flex justify-content-evenly">
				<Toast ref={toast} />
				{/* PROFILO DA LOGGATO */}
				{isLoggedIn && userInfo && (
					<div className="card flex flex-column gap-8">
						<Avatar
							label={userInfo.username.substring(0, 1).toUpperCase()}
							className="mr-2 w-8rem h-8rem text-6xl p-avatar"
							shape="circle"
						/>
						<h1 style={{fontFamily:"sans-serif", fontSize:"45px"}}>{`👾Ciao ${userInfo.username}, Bentornato!👾`}</h1> 
						<h2> ❤️️ Articoli Letti</h2>
						<div className="backgroundProfile">
							<p>Ancora nessun articolo</p>
						</div>
						<hr />
						<h2> ⌨ Commenti</h2>
						<div className="backgroundProfile">
							<p>Ancora nessun commento</p>
						</div>
						<hr />
						{/* <div className="flex flex-column gap-2">
							<label htmlFor="username">Username</label>
							<InputText disabled={true} id="username" value={userInfo.username} />
							<label htmlFor="isAdmin">Tipo utente</label>
							<InputText disabled={true} id="isAdmin" value={userInfo.isAdmin === 1 ? "Admin" : "User"} />
							<Button onClick={logout}>Logout</Button>
						</div> */}
					</div>
				)}

				{/* REGISTRATI
				{!isLoggedIn && (
					<div className="card flex justify-content-center">
						<form className="flex flex-column gap-3" onSubmit={handleSignup}>
							<h3>Registrati</h3>
							<label htmlFor="usernameSignup">Username</label>
							<InputText
								id="usernameSignup"
								placeholder="Username"
								onChange={(e) => setSignUpInput({ username: e.target.value, password: signUpInput.password })}
								value={signUpInput.username}
							></InputText>
							<label htmlFor="passwordSignup">Password</label>
							<InputText
								id="passwordSignup"
								placeholder="Password"
								onChange={(e) => setSignUpInput({ username: signUpInput.username, password: e.target.value })}
								value={signUpInput.password}
							></InputText>
							<Button className="w-5 align-self-end" label="Registrati"></Button>
						</form>
					</div>
				)}
				// {/* LOGIN */}
				{/* // {!isLoggedIn && (
				// 	<div className="card flex justify-content-center">
				// 		<form className="flex flex-column gap-3" onSubmit={handleLogin}>
				// 			<h3>Login</h3>

				// 			<label htmlFor="username">Username</label>
				// 			<InputText
				// 				placeholder="Username"
				// 				onChange={(e) => setLoginInput({ username: e.target.value, password: loginInput.password })}
				// 				value={loginInput.username}
				// 			></InputText>
				// 			<label htmlFor="password">Password</label>
				// 			<InputText
				// 				placeholder="Password"
				// 				onChange={(e) => setLoginInput({ username: loginInput.username, password: e.target.value })}
				// 				value={loginInput.password}
				// 			></InputText>
				// 			<Button className="w-5 align-self-end" label="Login"></Button>
				// 		</form>
				// 	</div>
				// )} */}
			</div>
		</Card>
	);
}

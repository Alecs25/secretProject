import { Card } from "primereact/card";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Toast } from "primereact/toast";
import { Avatar } from "primereact/avatar";
import { signUp } from "../controllers/user-controller";
import "../pages/profile.css" 


export function Profile() {
	const { userInfo, loginContext, isLoggedIn, logout } = useContext(UserContext);
	const [loginInput, setLoginInput] = useState({ username: "", password: "" });
	const [signUpInput, setSignUpInput] = useState({ username: "", password: "" });
	const [parseData, setParsedData] = useState(null)
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
	useEffect(() => {
		setParsedData(JSON.parse(data.comment));
	}, []);

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
						<div className="flex flex-column justify-content-center align-items-center">
						<Avatar
							label={userInfo.username.substring(0, 1).toUpperCase()}
							className="mr-2 w-7rem h-7rem text-5xl p-avatar"
							shape="circle"
						/>
						<h2 style={{fontFamily:"sans-serif", fontSize:"40px"}}>{`👾Ciao ${userInfo.username}, Bentornato!👾`}</h2> 
						</div>
						<h2>♡ Articoli Letti</h2>
						<div className="backgroundProfile">
							<p>Ancora nessun articolo</p>
						</div>
						<hr />
						<h2> ✎ Commenti</h2>
						<div className="backgroundProfile">

						</div>
						<hr />
					</div>
				)}
			</div>
		</Card>
	);
}

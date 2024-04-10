import { useContext, useState } from "react";
import "./SignForm.css";
import { signUp } from "../../controllers/user-controller";
import { UserContext } from "../../context/UserContext";
export function SignForm({ callback }) {
	const [inputSignup, setInputSignup] = useState({ username: "", password: "" });
	const [privacyAccepted, setPrivacyAccepted] = useState(false);
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const { showSuccess, showError } = useContext(UserContext);
	function handlePrivacyChange(event) {
		setPrivacyAccepted(event.target.checked);
	}

	function handlePasswordConfirmationChange(event) {
		setPasswordConfirmation(event.target.value);
		setPasswordError(inputSignup.password !== event.target.value);
	}

	async function HandleSubmit(e) {
		e.preventDefault();
		const signResponse = await signUp({ username: inputSignup.username, password: inputSignup.password });
		const signData = signResponse.data;
		if (signData.token) {
			showSuccess("Registrazione effettuata con successo");
			setTimeout(callback(false), 1500);
		} else {
			showError("Utente già esistente");
		}
	}

	return (
		<div className="cardSign">
			<h2 style={{ color: "#565efa" }}>Iscriviti</h2>
			<form onSubmit={HandleSubmit} className="form-control">
				<input
					className="Username"
					placeholder="Username"
					onChange={(e) => setInputSignup({ ...inputSignup, username: e.target.value })}
					name="username"
					type="text"
					value={inputSignup.username}
				/>
				<input
					className="Password"
					placeholder="Password"
					onChange={(e) => setInputSignup({ ...inputSignup, password: e.target.value })}
					name="password"
					type="password"
					value={inputSignup.password}
				/>
				<input
					placeholder="Conferma password"
					type="password"
					onChange={handlePasswordConfirmationChange}
					value={passwordConfirmation}
				/>
				{passwordError && <div className="textPassword">Le password non corrispondono</div>}
				{/* <label className="privacy">
					Cliccando su conferma accetti<a>la nostra Informativa</a>sulla privacy.
				</label> */}
				{/* <div className="privacyDisplay">
					<input className="checkbox" type="checkbox" onChange={handlePrivacyChange} />
				</div> */}
				{/* {privacyAccepted && (
					<div className="button-container">
						<button className="privacyButton" type="button">
							Conferma
						</button>
					</div>
				)} */}
				<div className="button-container">
					<button className="loginButton" type="submit" disabled={!inputSignup.username || !inputSignup.password}>
						Iscriviti
					</button>
				</div>
			</form>
		</div>
	);
}

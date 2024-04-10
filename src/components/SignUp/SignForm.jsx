import { useState } from "react";
import "./SignForm.css";
export function SignForm() {
	const [inputSignup, setInputSignup] = useState({ username: "", password: "" });
	const [privacyAccepted, setPrivacyAccepted] = useState(false);
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [passwordError, setPasswordError] = useState(false);


	function handlePrivacyChange(event) {
		setPrivacyAccepted(event.target.checked);
	}

	function handlePasswordConfirmationChange(event) {
		setPasswordConfirmation(event.target.value);
		setPasswordError(inputSignup.password !== event.target.value);
	}

	function HandleSubmit(event) {
	
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
					value={data.username}
				/>
				<input
					className="Password"
					placeholder="Password"
					onChange={(e) => setInputSignup({ ...inputSignup, password: e.target.value })}
					name="password"
					type="password"
					value={data.password}
				/>
				<input
					placeholder="Conferma password"
					type="password"
					onChange={handlePasswordConfirmationChange}
					value={passwordConfirmation}
				/>
				{passwordError && <div className="textPassword">Le password non corrispondono</div>}
				<input
					className="Email"
					placeholder="Email"
					onChange={HandleEmailChange}
					name="email"
					type="email"
					value={data.email}
				/>
				<label className="privacy">
					Cliccando su conferma accetti<a>la nostra Informativa</a>sulla privacy.
				</label>
				<div className="privacyDisplay">
					<input className="checkbox" type="checkbox" onChange={handlePrivacyChange} />
				</div>
				{privacyAccepted && (
					<div className="button-container">
						<button className="privacyButton" type="button">
							Conferma
						</button>
					</div>
				)}
				<div className="button-container">
					<button className="loginButton" type="submit" disabled={!data.username || !data.password || !data.email}>
						Iscriviti
					</button>
				</div>
			</form>
		</div>
	);
}

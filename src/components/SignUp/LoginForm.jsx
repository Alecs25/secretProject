import { useContext, useState } from "react";
import "./LoginForm.css";
import { SignForm } from "./SignForm";
import { LoginModal } from "./loginModal";
import { UserContext } from "../../context/UserContext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export function LoginForm({ callback }) {
	const [input, setInput] = useState({ username: "", password: "" });
	const [SignUpButton, setSignUpButton] = useState(false);
	const { userInfo, isLoggedIn, loginContext, logout} = useContext(UserContext);

	function HandleSubmit(e) {
		e.preventDefault(); // ti previene dei comportamenti che ha di base il form(Es. residui)
		loginContext(input.username, input.password);
    
	}

	return (
		<div className="Container">
			<div className="cardLogin" style={{ display: SignUpButton ? "none" : "flex" }}>
				<h2 style={{ color: "black" }}>Accedi</h2>
				<form onSubmit={HandleSubmit} className="form-control">
					<input
						className="Username"
						placeholder="Username"
						onChange={(e) => setInput({ ...input, username: e.target.value })}
						value={input.username}
					/>
					<input
						className="Password"
            type="password"
						placeholder="Password"
						onChange={(e) => setInput({ ...input, password: e.target.value })}
						value={input.password}
					/>
					<div className="button-container">
						<button type="submit" disabled={!input.username || !input.password}>
							Accedi
						</button>
					</div>
				</form>
				<div className="button-container">
					<button onClick={() => setSignUpButton(true)} type="button" style={{ textDecoration: "none" }}>
						Non hai un&apos;account? Iscriviti
					</button>
				</div>

				<div className="card-signup">
					{/* <LoginModal
						isVisible={SignUpButton}
						onClose={() => setSignUpButton(false)}
						children={<SignForm />}
					></LoginModal> */}
					<div className="card flex justify-content-center">
						<Dialog
							position={"top"}
							visible={SignUpButton}
							modal
              dismissableMask={true}
							content={<SignForm callback={setSignUpButton} />}
							onHide={() => {
								setSignUpButton(false);
							}}
						></Dialog>
					</div>
				</div>
			</div>
		</div>
	);
}

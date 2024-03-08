import { useState } from "react"
import "./SignForm.css"
export function SignForm() {

  const [data, setData] = useState(createData())
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  

  function createData() {
    return {
      username: "",
      password: "",
      confirmPassword:"",
      email: ""
    }
  }

  function HandleUsernameChange(event) {
    setData({ ...data, username: event.target.value })
  }

  function HandlePasswordChange(event) {
    setData({ ...data, password: event.target.value })
  }

  function HandleEmailChange(event) {
    setData({ ...data, email: event.target.value })
  }

  function handlePrivacyChange(event) {
    setPrivacyAccepted(event.target.checked);
  }

  function handlePasswordConfirmationChange(event) {
    setPasswordConfirmation(event.target.value);
    setPasswordError(data.password !== event.target.value);
  }

  function HandleSubmit(event) {
    event.preventDefault() // ti previene dei comportamenti che ha di base il form(Es. residui)
    setSubmitted(true)
    console.log(data)
  }


  return (
    <div className="cardSign">
      <h2 style={{color: "#565efa"}}>Iscriviti</h2>
      <form onSubmit={HandleSubmit} className="form-control">
        <input
          className="Username"
          placeholder="Username"
          onChange={HandleUsernameChange}
          name="username"
          type="text"
          value={data.username}
        />
        <input
          className="Password"
          placeholder="Password"
          onChange={HandlePasswordChange}
          name="password"
          type="password"
          value={data.password}
        />
        <input
          placeholder="Conferma password"
          type="password"
          onChange={handlePasswordConfirmationChange}
          value={passwordConfirmation} />
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
        Cliccando su conferma accetti<a>la nostra Informativa</a>sulla privacy.</label>
        <div className="privacyDisplay">
        <input className="checkbox" type="checkbox" onChange={handlePrivacyChange} />
        </div>
        {privacyAccepted && <div className="button-container">
          <button className="privacyButton" type="button">Conferma</button>
        </div>}
        <div className="button-container">
          <button type="submit"disabled={!data.username || !data.password || !data.email}>
           Iscriviti
          </button>
        </div>
      </form>
    </div>
  );
}

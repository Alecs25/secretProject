import { useState } from "react"
import "./LoginForm.css"
import { SignForm } from "./SignForm"
import { LoginModal } from "./loginModal"

export function LoginForm() {

    const[data, setData] = useState(createData())
    const [loginButton, setLoginButton] = useState(false)
    const [SignUpButton, setSignUpButton] = useState(false)
  


    function createData() {
        return {
            Username: "",
            Password:"",
        }
    }

    function HandleUsernameChange(event) {
        setData({ ...data, username: event.target.value })
      }
    
    function HandlePasswordChange(event) {
        setData({ ...data, password: event.target.value })
      }

    function HandleSubmit(event) {
        event.preventDefault() // ti previene dei comportamenti che ha di base il form(Es. residui)
        setSubmitted(true)
        console.log(data)
    }




    return (
        <div className="Container">
        <div className="cardLogin">
          <h2 style={{color: "#565efa"}}>Accedi</h2>
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
            <div className="button-container">
              <button type="submit"disabled={!data.username || !data.password || !data.email}>
              Accedi
              </button>
            </div>            
            <div className="button-container">
              <button onClick={()=>setSignUpButton(true)} type="button" style={{textDecoration: "none"}}>Non hai un'account? Iscriviti</button>
            </div>
             </form>
            <div className="card-signup">
            <LoginModal isVisible={SignUpButton} onClose={()=> setSignUpButton(false)} children={<SignForm/>}></LoginModal>
            </div>
        </div>
        </div>
      );
    }
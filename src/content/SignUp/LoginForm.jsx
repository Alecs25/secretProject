import { useState } from "react"
import "./LoginForm.css"

export function LoginForm() {

    const[data, setData] = useState(createData())

    // useState per rendere personalizzabile il componente "Login" - in forse, da revisionare con Matteo e Alex

    const [theme, setTheme] = useState('light');
    const [layout, setLayout] = useState('default');
    const [backgroundImage, setBackgroundImage] = useState('');
  


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

    // cambio del tema
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  // cambio del layout
  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  // cambio dell'immagine di sfondo
  const handleBackgroundChange = (event) => {
    setBackgroundImage(event.target.value);
  };



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
          </form>
        </div>
        </div>
      );
    }
    
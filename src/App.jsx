import { Navbar } from "./Navbar/Navbar";
import { Carousel } from "./Carousel/Carousel";
import { useEffect, useState } from "react";
function App() {
  const current_theme = localStorage.getItem("current_theme")
  const [theme, setTheme]= useState(current_theme ? current_theme : "light")
  useEffect(()=>{
  localStorage.setItem("current_theme", theme )
  },[theme])
  return (
    <div className={`mainContainer ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Carousel/>
    </div>
  );
}

export default App;

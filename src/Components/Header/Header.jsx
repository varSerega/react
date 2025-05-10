import logo  from "/logo.svg";
import { useState } from "react";
import classes from "./Header.module.css"



export default function Header() {
 
  const [now, setNow] = useState(new Date())

setInterval(()=>setNow(new Date()),1000)
  return (
    <header className={classes.header}>
        <img src={logo} alt={"logo"} width={30} />
      <h3>Reesult University</h3>
      <span> Время сейчас: {now.toLocaleTimeString()}</span>
    </header>

    
  )
}
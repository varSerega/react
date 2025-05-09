import logo  from "/logo.svg";

const now = new Date();



export default function Header() {
  return (
    <header>
        <img src={logo} alt={"logo"} width={30} />
      <h3>Reesult University</h3>
      <span> Время сейчас: {now.toLocaleDateString()}</span>
    </header>

    
  )
}
import Header from "./Components/Header"
import WaitToTeach from "./Components/WayToTeach"
import  { ways } from './data'




export default  function App() {

  return (
    
      <div>
         <Header/>
         <main>
          <section>
          <h1>Наш подход к обучению</h1>
          <ul>
           <WaitToTeach  {...ways[0]} />
           <WaitToTeach  {...ways[1]} />
    
          
          </ul>
          </section>

          <section>
            <h3>
              Чем мы отличаемся от других учебных заведений?
            </h3>
          </section>
          </main>
       
      </div>
      

  )
}


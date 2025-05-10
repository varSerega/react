import  { ways } from '../data'
import WaitToTeach from "./WayToTeach"

export default  function TeachingSection(){
    return (

<section>
          <h1>Наш подход к обучению</h1>
          <ul>
            {ways.map((way)=><WaitToTeach key={way.title} {...way}/>)}
          
          </ul>
          </section>

    )
}
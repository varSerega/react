import  {differences } from '../data'
import { useState } from "react"
import Button from "./Button/Button"


export default function  DifferencesSection () {

    const [contentType, setContentType] = useState(null)
    
      function handleClick(type){
        setContentType(type)
      }
    
     return (
     <section>
            <h3>
              Чем мы отличаемся от других учебных заведений?
            </h3>
            <Button onClick={()=>handleClick('way')}
            isActive={contentType==='way'}
              >Подход</Button>
            <Button onClick={()=>handleClick('programm')}
              isActive={contentType==='programm'}
              >Концентрация</Button>
            <Button onClick={()=>handleClick('eazy')}
              isActive={contentType==='eazy'}
              >Доступность</Button>


             {!contentType&&<div>Нажми кнопку</div>}
            {contentType&& <p>{differences[contentType]}</p>}
          </section>)

}
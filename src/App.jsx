import DifferencesSection from "./Components/DifferencesSection"
import FeedbackSection from "./Components/FeedbackSection"
import Header from "./Components/Header/Header"
import IntroSection from "./Components/Introsection"
import TabSection from "./Components/TabSection"
import TeachingSection from "./Components/TeachingSection"
import { useState } from "react"





export default  function App() {
  
  const [tab, setTab] = useState('feedback') 
  
  return (
    
      <>
         <Header/>
         <main>
          <IntroSection />
          <TabSection active={tab} onChange ={(current)=>setTab(current)}/>
            {tab ==="main" && (<>
  
          <TeachingSection />
          <DifferencesSection/>
            </>)}

          {tab ==="feedback" && <FeedbackSection/>}


          
          </main>
       
      </>
      

  )
}


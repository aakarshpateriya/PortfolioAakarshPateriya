import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar.jsx'
// importing navbar css file
import './navbar.css'
import Intro from './Intro.jsx'
import SocialLink from './socialLink.jsx'

import Projects from './projectCard.jsx'
import Footer from './footer.jsx'
import Cv from './cv.jsx'





function App() {
  const [count, setCount] = useState(0)

  return (
    <> 

    
    <Navbar/>
    <Intro/>
   <Projects/>

   <Cv/>

   <Footer/>
  
   

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar.jsx'
// importing navbar css file
import './navbar.css'
import Intro from './Intro.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar/>
    <Intro/>
    </>
  )
}

export default App

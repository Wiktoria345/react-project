import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Pierwsz apka z React</h1>
    <UserProfile name="Wiktoria Bruska" description="Uczeń TEB"/>
    <UserProfile name="Amna Nowak" description="Nie mam pojęcia co robię"/>
   </div>
  )
}

export default App

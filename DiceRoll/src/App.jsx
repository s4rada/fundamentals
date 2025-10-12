import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const diceFaces = ["one", "two", "three", "four", "five", "six"]

function App() {
  const [display1,setDisplay1] = useState(diceFaces[0])
  const [display2,setDisplay2] = useState(diceFaces[0])
  const HandleClick = () => {
    setDisplay1(diceFaces[Math.floor(Math.random()*diceFaces.length)])
    setDisplay2(diceFaces[Math.floor(Math.random()*diceFaces.length)])
  }
  return (
    <main>
      <h2>THE DICE ROLLING MACHINE</h2>
      <div className='flex flex-row justify-center items-center space-x-16 p-8'>
        <div>{display1}</div>
        <div>{display2}</div>
      </div>
      <button onClick={HandleClick}>Roll Dice</button>
    </main>
  )
}

export default App

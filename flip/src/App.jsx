import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [flip, setFlip] = useState(false)
  const [isFlipping, setisFlipping] = useState(false)
  const [result, setResult] = useState('')
  const [headCounts, setHeadCounts] = useState(0)
  const [tailCounts, settailCounts] = useState(0)
  const HandleFlip = ()=>{
    const randomFlip = Math.random() >= 0.5
    setFlip(randomFlip)
    console.log(flip)
    setResult(randomFlip?'Heads!':'Tails!')
    {randomFlip?setHeadCounts(headCounts+1):settailCounts(tailCounts+1)}
  }
  return (
    <main>
      <h1>Let's Flip A Coin</h1>
      <p>{result}</p>
      <button onClick={HandleFlip}>Flip Me</button>
      <p>Out of n flips, there have been {headCounts} heads and {tailCounts} tails</p>
    </main>
  )
}

export default App

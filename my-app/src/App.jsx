import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/weather/Weather'
import Search from './components/search/Search'

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')

  return (
    <>
      <Weather/>

    </>
  )
}

export default App

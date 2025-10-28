import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
import Favorites from './Pages/Favorites/Favorites'

function App() {

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Favorites' element={<Favorites/>}/>
      <Route path='/recipe-item/:id' element={<Details/>}/>
    </Routes>
   </div>
  )
}

export default App

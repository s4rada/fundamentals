import Navbar from "../components/Navbar"
import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Favorites' element={<Cart/>}/>
    </Routes>
   </div>
  )
}

export default App

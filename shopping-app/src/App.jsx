import Navbar from "../components/Navbar"
import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import {Routes, Route} from 'react-router-dom'
import StartPage from "./Pages/StartPage/StartPage"
import {useState } from 'react'



function App() {
  const [cart, setCart] = useState([])
  const HandleAddCart = (product)=>{
    setCart(prevCart =>{
      const existItem = prevCart.find(item=> item.id===product.id)

      if(existItem){
        return prevCart.map(item=>item.id===product.id?{...item, quantity:item.quantity+1}:item)
      }else{
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/home' element={<Home HandleAddCart={HandleAddCart} />}/>
      <Route path='/cart' element={<Cart cart={cart} />}/>
    </Routes>
   </div>
  )
}

export default App

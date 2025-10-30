import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          

          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Store</span>
          </Link>


          <form className="flex-1 max-w-xl mx-12">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full px-6 py-4 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all placeholder-gray-500"
            />
          </form>


          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-black font-medium text-lg transition-colors border-b-2 border-transparent hover:border-black pb-1"
            >
              Home
            </Link>
            <Link 
              to="/favorites" 
              className="text-gray-600 hover:text-black font-medium text-lg transition-colors border-b-2 border-transparent hover:border-black pb-1"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
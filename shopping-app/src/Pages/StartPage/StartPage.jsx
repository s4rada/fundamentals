import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">

        <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-2xl">
          <span className="text-4xl text-white font-bold">S</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
          Welcome to
          <span className="block font-serif italic text-gray-700 mt-2">Our Store</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-md mx-auto">
          Shop now and discover exclusive deals on premium products curated just for you.
        </p>

        <Link to='/home'>
          <button className="bg-gray-900 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore Collection
          </button>
        </Link>


        <div className="flex justify-center gap-8 mt-16 text-sm text-gray-500">
          <span>✓ Free Shipping</span>
          <span>✓ Easy Returns</span>
          <span>✓ Secure Checkout</span>
        </div>
      </div>
    </div>
  )
}

export default StartPage
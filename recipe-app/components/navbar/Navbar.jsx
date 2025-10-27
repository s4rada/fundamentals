import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/Context'

const Navbar = () => {
  const {searchParam,setSearchParam,HandleSubmit} = useContext(GlobalContext)
  // function HandleSubmit (){
    
  // }
  return (
    <nav className='bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg border-b border-gray-200'>
      <div className='flex justify-between items-center py-6 px-4 container mx-auto flex-col lg:flex-row gap-6 lg:gap-0'>

        <Link to="/" className='flex items-center space-x-2 group'>
          <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-md'>
            <span className='text-white font-bold text-lg'>🍳</span>
          </div>
          <h2 className='text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-red-700 transition-all duration-300'>
            Food Recipes
          </h2>
        </Link>


        <form className='w-full lg:w-auto' onSubmit={HandleSubmit}>
          <div className='relative'>
            <input 
              type="text" 
              name='search' 
              placeholder='Search recipes...' 
              className='w-full lg:w-80 px-6 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 shadow-sm transition-all duration-300 bg-white text-gray-700 placeholder-gray-400'
              onChange={(e)=>setSearchParam(e.target.value)}
            />
            <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
              <svg className='w-5 h-5 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </form>


        <ul className='flex gap-8'>
          <li>
            <Link 
              to="/" 
              className='flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white hover:shadow-md group'
            >
              <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/favorites" 
              className='flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white hover:shadow-md group'
            >
              <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Favorites</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
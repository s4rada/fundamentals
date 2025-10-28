import React from 'react'
import { Link } from 'react-router'

const RecipeItem = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">

      <div className="relative overflow-hidden">
        <img 
          src={item.image_url} 
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      

      <div className="p-5">
        <h3 className="font-semibold text-gray-800 text-lg leading-tight mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm font-medium">By {item.publisher}</p>
        

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
            #{item.id.slice(-4)}
          </span>
          <Link to={`/recipe-item/:${item.id}`} className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeItem
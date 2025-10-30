import React from 'react'

const RecipeList = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="p-4 bg-gray-50">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2 leading-tight">
          {item.title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${item.price}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded capitalize">
            {item.category}
          </span>
        </div>

        <button className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default RecipeList
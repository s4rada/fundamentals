import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../../context/Context'

const Details = () => {
  const { id } = useParams()
  const { recipeDetailsData, setRecipeDetailsData, HandleAddFavorites } = useContext(GlobalContext)
  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json()
      console.log(data.data.recipe)

      if (data?.data) {
        setRecipeDetailsData(data?.data?.recipe)
      }
    }
    getRecipeDetails()
  }, [id, setRecipeDetailsData])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8">

            <div className="relative">
              <img 
                src={recipeDetailsData?.image_url} 
                alt={recipeDetailsData?.title}
                className="w-full h-80 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🍽️ Recipe
                </span>
              </div>
            </div>
            

            <div className="p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {recipeDetailsData?.title}
              </h1>
              
              <p className="text-gray-600 text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                By <span className="font-semibold text-orange-600">{recipeDetailsData?.publisher}</span>
              </p>


              <div className="flex gap-4 mb-6">
                {recipeDetailsData?.cooking_time && (
                  <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                    <span className="text-orange-600">⏱️</span>
                    <span className="text-sm font-medium text-gray-700">{recipeDetailsData.cooking_time} mins</span>
                  </div>
                )}
                
                {recipeDetailsData?.servings && (
                  <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                    <span className="text-amber-600">👥</span>
                    <span className="text-sm font-medium text-gray-700">{recipeDetailsData.servings} servings</span>
                  </div>
                )}
              </div>

              <button onClick={()=>HandleAddFavorites(recipeDetailsData)} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-fit">
                ❤️ Save as Favorites
              </button>
            </div>
          </div>
        </div>


        {recipeDetailsData?.ingredients && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-3 h-8 bg-orange-500 rounded-full"></span>
              Ingredients
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {recipeDetailsData.ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-200 border border-orange-100"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-orange-500 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-gray-800 block">
                      {ingredient.description}
                    </span>
                    {(ingredient.quantity || ingredient.unit) && (
                      <span className="text-sm text-gray-500">
                        {ingredient.quantity} {ingredient.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {recipeDetailsData?.instructions && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-3 h-8 bg-amber-500 rounded-full"></span>
              Instructions
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {recipeDetailsData.instructions}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Details
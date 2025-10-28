import React, { useContext } from 'react'
import GlobalState, { GlobalContext } from '../../../context/Context'
import RecipeItem from '../../../components/recipe-list/recipeItem'

const Favorites = () => {
  const {favoritesList, isLoading} = useContext(GlobalContext)
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {isLoading ? 
      (<div className='flex justify-center align-items'>
        <Loading />
      </div>
      ) : (
        <div>
          {favoritesList && favoritesList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
              {favoritesList.map((item) => (
                <RecipeItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🍳</div>
              <p className="text-gray-500 text-xl font-light">No favorite recipes found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Favorites
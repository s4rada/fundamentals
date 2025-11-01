import { useState, useEffect } from 'react'
import '/Users/ron/Documents/stuff/Fundamentals/shopping-app/src/App.css'
import RecipeList from '../../../components/RecipeList';

const Home = ({HandleAddCart}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch(e) {
        console.log('Error fetching products:', e);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Our Products
          </h1>
          <p className="text-gray-500">
            {products.length} items available
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-gray-500">Loading products...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item) => (
              <RecipeList key={item.id} item={item} HandleAddCart={HandleAddCart}/>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
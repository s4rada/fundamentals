import { useState, useEffect } from 'react'
import '/Users/ron/Documents/stuff/Fundamentals/shopping-app/src/App.css'
import RecipeList from '../../../components/RecipeList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        console.log('Products loaded:', data.length);
      } catch(e) {
        console.log('Error fetching products:', e);
      }
    }
    
    fetchData();
  }, []);

  return (
    <main>
      <h1>Products ({products.length})</h1>
      <div>
        {products.map((item) => (<RecipeList key={item.id} item={item}/>
          
        ))}
      </div>
    </main>
  )
}

export default Home



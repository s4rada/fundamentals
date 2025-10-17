import { useState, useEffect } from "react";
import './App.css'
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTFhNzljMmRiYjkyYjA3MDAzMDQ3MmI2NjNlNmYzMCIsIm5iZiI6MTc1OTY3NjUyMy42MzkwMDAyLCJzdWIiOiI2OGUyODg2YjZiMDBmOThlOTFmODE3N2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r9c7Vp4-vbyvUvfNs4oOpqtTs0Nm_YAQtr92gTHEQpw`
  }
};
function App() {
  const [searchTerm, setsearchTerm] = useState('');
  const [errorMessage, seterrorMessage] = useState('')
  const [movieList, setmovieList] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fethMovies = async (query = '') => {
    setisLoading(true)
    seterrorMessage('')
    try {
      const endpoint = query ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`
      :
      `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)
      console.log(response)
      if (!response.ok){
        throw new Error('Failed to fetch movies')
      }
      const data = await response.json()
      // if (data.Response == 'False') {
      //   seterrorMessage(data.Error || 'Failed to fetch movies')
      //   setmovieList([])
      //   return
      // }
      console.log(data.results)
      setmovieList(data.results|| [])
    } catch (error) {
      console.error(`Error Fetching Movies: ${error}`)
      seterrorMessage('Error fetching movies. Please try again later.')
    } finally {
      setisLoading(false)
    }
  }
  useEffect(()=>{
    fethMovies(searchTerm)
  },[searchTerm])
    return (
        <main>
          <div/>
          <div>
            <header>
              <h1>Find <span>Movies</span> You'll Enjoy Without the Hassle</h1>
            <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
            </header>
            <section>
              <h2>
                All Movies
              </h2>
            </section>
            <div className="flex flex-column justify-center">
              {isLoading ? (<p>Loading... </p>): errorMessage ? (
                <p>{errorMessage}</p>
              ) :(
                <ul>
                  {movieList.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>
    );
}

export default App;
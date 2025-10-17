import { useState, useEffect } from "react";
import './App.css'
import Search from "./Components/Search";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method:'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
function App() {
  const [searchTerm, setsearchTerm] = useState('');
  const [errorMessage, seterrorMessage] = useState('')
  const fethMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)
      alert(response)
    } catch (error) {
      console.error(`Error Fetching Movies: ${error}`)
      seterrorMessage('Error fetching movies. Please try again later.')
    }
  }
  useEffect(()=>{
    fethMovies()
  })
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
              {errorMessage && <p>{errorMessage}</p>}
            </section>
          </div>
        </main>
    );
}

export default App;
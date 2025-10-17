import React, {useState} from 'react'

const MovieCard = ({movie:{title, vote_average, poster_path, release_date, original_language, overview}}) => {
  const [showOverview, setShowOverview] = useState(false)
  const HandleClick = ()=> {
    setShowOverview(!showOverview)
  }
    return (
    <div onClick={HandleClick} className='flex flex-column '>
        <img  className='w-25 h-25' src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: '/no-movie.png'} alt={title} />
        <div>
            <h3>{title}</h3>
            <p>{vote_average}</p>
            <p>Release Date: {release_date}</p>
            {showOverview && (
            <p>
                {overview || 'No Overview Available'}
            </p>
            )}
        </div>
    </div>
  )
}

export default MovieCard
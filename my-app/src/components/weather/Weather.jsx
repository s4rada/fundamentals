import React, { useState } from 'react'
import Search from '../search/Search'
import Loading from '../loading/Loading'

const Weather = () => {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [weather, setWeather] = useState(null)
    async function fetchWeatherData (param){
        try{
            setIsLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=cf4f47d9b4a1c9ac4613ef58c4947701&units=metric`)
            const data = await response.json()
            // const temperature = data.main.temp
            console.log(data)
            if (data){
                setWeather(data)
                setIsLoading(false)
            }
        }catch(e){
            console.log(e)
            setIsLoading(false)
        }finally{

        }
    }
    function HandleSearch (){
        fetchWeatherData(search)
    }
  return (
    <div>
        <Search search={search} setSearch={setSearch} HandleSearch={HandleSearch}/>
        <div>
            <div>
                
                {isLoading?<Loading/>
                :
                <div>
                    <p>Weather</p>
                    <h1>{weather?.name}, {weather?.sys.country}</h1>
                    <div>
                        <p>Stats:</p>
                        <p>Feels Like: {weather?.main.feels_like}°C</p>
                        <p>Description: {weather?.weather[0].description}</p>

                    </div>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Weather
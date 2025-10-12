

import React from "react";
 
import Button from "./Button";


const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => { console.log(res) 
                return res.json()})
            .then((data) => {
                console.log(data)
                return setJoke(data.joke)});
        
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
    );
}

export default Joke;
// Joke.js

import React from "react";
 
import Button from "./Button";


const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://v2.jokeapi.dev/joke/Any")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
            console.log(data);
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
    );
}

export default Joke;
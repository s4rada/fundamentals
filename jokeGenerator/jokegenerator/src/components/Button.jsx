import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.callApi}>
        Generate Joke
    </button>
  )
}

export default Button
import { useState } from 'react'

import './App.css'
import validator from 'validator'

function App() {
  const [display, setDisplay] = useState("");
  const [isStrong, setIsStrong] = useState(false);
  const handlePassword = (value)=>{
      const isPasswordStrong = validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        });
        

        if(isPasswordStrong)
        {
          (setDisplay("Strong-ahhh password"),
          setIsStrong(true))
        } else
        {
          (setDisplay("weak ahhh password"),
          setIsStrong(false))
        }
        ;
        setIsStrong(isPasswordStrong);
  }

  return (
    <main>
      <h2>Checking Password Strength</h2>
      <div>
        <p>Enter Password:</p>
        <input type="text" onChange={(e)=>handlePassword(e.target.value)}/>
        <p style={{color: !display ? 'green' : "red"}}>{display}</p>
      </div>
    </main>
  )
}

export default App

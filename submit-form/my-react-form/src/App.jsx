import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("")
  const [gender, setGender] = useState("")
  const [submitData, setSubmitData] = useState(null)
  useEffect(() => {
    console.log(`First Name: ${firstName}, Gender: ${gender}`)
  }, [firstName, gender])

  const handleFirstName = (e) => {
    // e.preventDefault()
    setFirstName(e.target.value)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${firstName} xd xd xd ${gender}`)
    setSubmitData({firstName: firstName, gender:gender})
  }
  return (
    <main>
      {submitData && (<h2>{submitData.firstName}</h2>)}
      <h2>Form in React</h2>
      <form action="" >
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" onChange={handleFirstName} value={firstName}/>
        </div>
  

        <div>
          <label htmlFor="gender">Gender*</label>
          <br />
          <input type="radio" id = 'male' onChange={handleGender} value="male" checked = {gender === 'male'}/> Male
          <input type="radio" id = 'female' onChange={handleGender} value="female" checked = {gender === 'female'}/> Female
          <input type="radio" id = 'other' onChange={handleGender} value="other" checked = {gender === 'other'}/> Other 

        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
          <button>Reset</button>
        </div>
      </form>
    </main>
  )
}

export default App

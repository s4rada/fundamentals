import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState =
  {
    height: '',
    weight: ''
  }
;
function App() {
  const [formData, setFormData] = useState(initialState)
  const [display, setDisplay] = useState(null)

  const HandleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData, [name]:value})
    console.log(value)
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    calculateBMI()
  }

  const calculateBMI = () => {
    const {height, weight} = formData;

    const bmiCalc = Math.round(parseFloat(weight) / ((parseFloat(height)/100)*(parseFloat(height)/100)))
    setDisplay(bmiCalc)

  }
  return (
    <main>
      <div onSubmit={HandleSubmit}>
        <h2>BMI CALCULATOR</h2>
        <div>
          <label htmlFor="height">Centimeters: </label>
          <input type="number" name='height' onChange={HandleChange} value={formData.height}/>
        </div>
        <div>
          <label htmlFor="weight">Kilograms: </label>
          <input type="number" name='weight' onChange={HandleChange} value={formData.weight}/>
        </div>
        <button type='submit' onClick={calculateBMI}>calculate</button>
        <div>{display}</div>
      </div>
    </main>
  )
}

export default App

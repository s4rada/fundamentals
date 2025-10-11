import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const initialState = {
    price: '',
    dp: '',
    ir: '',
    ltYear: ''
  }
  const [form, setFormData] = useState(initialState)
  const [display1, setDisplay1] = useState()
  const [display2, setDisplay2] = useState()
  const [display3, setDisplay3] = useState()
  const HandleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...form, [name]:value})
  }

  const HandleSubmit = (e)=>{
    e.preventDefault()
    calculateBmi()
  }

  
  

  const calculateBmi = () => {
    const {price,dp,ir,ltYear} = form;
    
    const loanPayment = parseFloat(price) - parseFloat(dp)
    const monthlyRate = parseFloat((ir))/100/12
    const numPayments = parseFloat(ltYear) * 12 

    const numerator = loanPayment * monthlyRate * Math.pow(1 + monthlyRate, numPayments)
    const denominator = Math.pow(1+monthlyRate, numPayments)-1
    const monthlyPayment = ((numerator/denominator)).toFixed(2)
    const totalLoanPayment = monthlyPayment * numPayments

    const totalInterestAmount = (totalLoanPayment - loanPayment).toFixed(2)
    setDisplay1(monthlyPayment)

    setDisplay2(totalLoanPayment)

    setDisplay3(totalInterestAmount)

  }

  
  return (
    <form action="" onSubmit={HandleSubmit}>
      <h2>Mortgage Calculator</h2>
      <div>
        <label htmlFor="">Home Price ($): </label>
        <input type="number" name='price' onChange={HandleChange} value={form.price}/>
      </div>
       <div>
        <label htmlFor="">Down Payment ($): </label>
        <input type="number" name='dp' onChange={HandleChange} value ={form.dp}/>
      </div>
       <div>
        <label htmlFor="">Interest Rate (%): </label>
        <input type="number" name='ir' onChange={HandleChange} value={form.ir}/>
      </div>
       <div>
        <label htmlFor="">Loan Term (years): </label>
        <input type="number" name='ltYear' onChange={HandleChange} value={form.ltYear}/>
      </div>
      
      <button type='submit'>Calculate</button>
      <div>
        <p>{display1}</p>
        <p>{display2}</p>
        <p>{display3}</p>

      </div>
    </form>
  )
}

export default App

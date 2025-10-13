import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);
  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const choices = ['rock', 'paper', 'scissors'];

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  const determineWinner = (user, computer) => {
    if (user === computer) return 'tie';
    
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'user';
    }
    
    return 'computer';
  };

  const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);

    if (winner === 'user') {
      setResult('You win!');
      setUserScore(userScore + 1);
    } else if (winner === 'computer') {
      setResult('Computer wins!');
      setComputerScore(computerScore + 1);
    } else {
      setResult("It's a tie!");
      setTies(ties + 1);
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setTies(0);
    setResult('');
    setUserChoice('');
    setComputerChoice('');
  };

  return (
    <main>
      <h1>A SIMPLE ROCK-PAPER-SCISSORS GAME</h1>
      <div>
        <p>Score</p>
        <p>You: {userScore}</p>
        <p>Computer: {computerScore}</p>
        <p>Ties: {ties}</p>
      </div>
      {result && (
        <div>
          <h3>Result</h3>
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p><strong>{result}</strong></p>
        </div>
      )}
      <div>
        <button onClick={() => playGame('rock')}>R</button>
        <button onClick={() => playGame('paper')}>P</button>
        <button onClick={() => playGame('scissors')}>S</button>
      </div>
      <button onClick={resetGame}>Reset</button>
    </main>
  )
}

export default App

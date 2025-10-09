import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [myIp, setMyIp] = useState('');

  const fetchLocation = () => {
    Axios.get("https://ipapi.co/json/")
      .then((res) => {
        setMyIp(res.data.ip);
      })
      .catch((err) => {
        console.error("Error fetching IP:", err);
      });
  };

  return (
    <main className=''>
      <h1>IP ADDRESS FINDER</h1>
      <div className='flex flex-row'>
        <div>
          <p>What is my IPv4 Address?</p>
          <p>{myIp || '123.123.123.123'}</p>
          <p>Approximate Location</p>
          <p>Location</p>
          <p>Internet Service Provider (ISP)</p>
          <p>PLDT</p>
        </div>
        <div className='flex justify-center'>
          <button onClick={fetchLocation}>Find My IP</button>
        </div>
      </div>
    </main>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count value: {count}</p>
      <Header count= {count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;

// import { Component } from 'react';
import './App.css';
// import Heading from "./Components/Heading.js"
import React, { useState } from "react";



function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  const now = new Date().toLocaleTimeString();
  const [time,setTime] = useState(now);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>

    </div>
  );
}

export default App;
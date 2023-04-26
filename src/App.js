// import { Component } from 'react';
import { Component } from 'react';
import './App.css';

import Heading from "./Components/heading"
import Card from "./Components/card"



function App() {
  return (
    <div className="App">
      <Heading/>
      <List/>
      {/* <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()} </li>
      </ul> */}
      {/* OR */}
      <ul>
        <li>{pi.default}</li>
        <li>{pi.doublePi()}</li>
        <li>{pi.triplePi()} </li>
      </ul>


    </div>
  );
}

export default App;



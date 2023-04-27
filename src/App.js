// import { Component } from 'react';
import './App.css';
import Heading from "./Components/Heading.js"
import Login from "./Components/Login.js"



var isLoggedIn = false
const currentTime = new Date(2019,11,1,9).getHours();


function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login/>}
      {currentTime < 12 && <h1>Why are you Working Man</h1>}
    </div>
  );
}

export default App;



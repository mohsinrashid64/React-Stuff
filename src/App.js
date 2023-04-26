// import { Component } from 'react';
// import { Component } from 'react';
import './App.css';
import Heading from "./Components/heading"


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const newNumsSquare1 = numbers.map( (param) => { // Note: Brackets around param are only necessary when you want to add multiple parameters
  return param * param;
})

const newNumsSquare2 = numbers.map( param => {
  return param * param;
})

const newNumsSquare3 = numbers.map( param =>  param * param)

function App() {
  return (
    <div className="App">
      <Heading/>
      <p>
        Arrow Function 1: 
        {" " + newNumsSquare1 + " "}
      </p>
      <p>
        Arrow Function 2: 
        {" " + newNumsSquare2 + " "}
      </p>
      <p>
        Arrow Function 3: 
        {" " + newNumsSquare3 + " "}
      </p>

    </div>
  );
}

export default App;



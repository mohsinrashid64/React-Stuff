// import { Component } from 'react';
// import { Component } from 'react';
import './App.css';
import Heading from "./Components/heading"


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// OLD WAY
// function double(param){
//   return param * 2;
// }
// const newNums = numbers.map(double)
// function double(param){
//   return param * 2;
// }
////////////////////////


// Map
const newNumsMap = numbers.map(function(param){
  return param * 2;
})

// Filter 
const newNumsFilter = numbers.filter(function(param){
  return param < 5
})


// Reduce
const newNumsReduce = numbers.reduce(function(accumulator,param){
  return accumulator + param
})

// Find
const newNumsFind = numbers.find(function(param){
  return  param > 5
})

// Find Index
const newNumsFindIndex = numbers.findIndex(function(param){
  return  param > 2
})

function App() {
  return (
    <div className="App">
      <Heading/>
      <p>
        Map Function: 
        {newNumsMap + " "}
      </p>
      <p>
        Filter Function:
        {newNumsFilter + " "}
      </p>
      <p>
        Reduce Function: 
        {newNumsReduce + " "}
      </p>
      <p>
        Find Function: 
        {newNumsFind + " "}
      </p>
      <p>
        Find Index Function: 
        {newNumsFindIndex + " "}
      </p>
    </div>
  );
}

export default App;



// import { Component } from 'react';
import './App.css';
import Heading from "./Components/Heading.js"
<<<<<<< Updated upstream
import animals from "./assets/data"
=======
import React, { useState } from "react";
>>>>>>> Stashed changes


// Destructuring Through Array

const [cat,dog,lion,griaffe]=animals; // You can write anything inplace of "cat" and "dog"
console.log(cat)
console.log(dog)

// Destructuring Through Object
const { name, sound } = cat // "name" and "sound" are properties of the object so there name has to be the same as in the object
// or
const { name:dogName, sound:dogSound } = dog

const { name:lionName, sound:lionSound="roar" } = lion

const { name:griaffeName, sound:griaffeSound, feedingRequirements:{food,water} } = griaffe


function App() {

  return (
    <div className="container">
      <Heading/>
<<<<<<< Updated upstream
      <p>{cat["name"]} {cat["sound"]}</p>
      <p>{dog["name"]} {dog["sound"]}</p>
=======
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
>>>>>>> Stashed changes

      <p>{name} {sound}</p>
      <p>{dogName} {dogSound}</p>
      <p>{lionName} {lionSound}</p>
    </div>
  );
}

export default App;
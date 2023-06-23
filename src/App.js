// import { Component } from 'react';
import './App.css';
import Heading from "./Components/Heading.js"
import animals from "./assets/data"


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
      <p>{cat["name"]} {cat["sound"]}</p>
      <p>{dog["name"]} {dog["sound"]}</p>

      <p>{name} {sound}</p>
      <p>{dogName} {dogSound}</p>
      <p>{lionName} {lionSound}</p>
    </div>
  );
}

export default App;
// import { Component } from 'react';
// import { Component } from 'react';
import './App.css';
import Heading from "./Components/heading"




const citrus = ["Lime","Lemon","Orange"];
const fruits = ["Apple",...citrus,"Banana","Coconut"];


// Map
const citrusVar = citrus.map(function(param){
  return param ;
})

const fruitsVar = fruits.map(function(param){
  return param ;
})

const fullName = {
  fname: "Schenider",
  lname: "Electric"
}

const user = {
  ...fullName,
  id:1,
  username: "se101"
  
}
function App() {
  return (
    <div className="App">
      <Heading/>
      <p>
        {citrusVar + " "}  
      </p>
      <p>
        {fruitsVar + " "}
      </p>
      <p>
        {user["fname"] + " " + user["lname"] + " " + user["id"] + " " + user["username"] }
      </p>
      <p>
        {`${user.fname}  ${user.lname} ${user.id} ${user.username} `}
      </p>
    </div>
  );
}

export default App;



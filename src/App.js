// import { Component } from 'react';
import './App.css';
import Heading from "./Components/Heading.js"
import Form from "./Components/Form.js"



var userIsRegistered = false
const currentTime = new Date(2019,11,1,9).getHours();


function App() {
  return (
    <div className="container">
      <Form
        isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;



// import { Component } from 'react';
import { Component } from 'react';
import './App.css';

import Heading from "./Components/heading"
import Card from "./Components/card"



function App() {
  return (
    <div className="App">
      <Heading/>
      <Card name="Schenider" image="https://picsum.photos/200" phone="03334545454" email="abc@gmail.com"/>
      <Card name="Genral" image="https://picsum.photos/201" phone="03313421234" email="xyz@outlook.com"/>
      <Card name="Benz" image="https://picsum.photos/202" phone="04321234321" email="lmn@yahoo.com"/>


    </div>
  );
}

export default App;



// import { Component } from 'react';
// import { Component } from 'react';
import './App.css';
import information from "./information"
import Heading from "./Components/heading"
import Card from "./Components/card"

function CreateCard(informationOfCard){
  return (<Card 
               key={informationOfCard.id}
               name={informationOfCard.name}
               image={informationOfCard.image}
               phone={informationOfCard.phone}
               email={informationOfCard.email}
  />
  );
}

function App() {
  return (
    <div className="App">
      <Heading/>

      {information.map(CreateCard)}

      <Card name="test" phone="testphone" email="testemail" />
      


    </div>
  );
}

export default App;



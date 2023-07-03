import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';



function App() {
  return (

    <div>
      <Routes>
      <Route path='/' element={<Login/>}></Route>  
      <Route path='/signup' element={<Signup/>}></Route>  
      </Routes>
      

    </div>
    
  );
}

export default App;



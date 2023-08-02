import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';



function App() {
  return (

    <div>
      <Routes>
      <Route path='/' element={<Login/>}></Route>  
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>  
      </Routes>
      

    </div>
    
  );
}

export default App;

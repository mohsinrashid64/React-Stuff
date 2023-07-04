import './App.css';
import React from 'react';
import {Link, Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Book from './Components/Book';
import BookList from './Components/BookList';
import NotFound from './Components/NotFound';


function App() {
  return (

    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link> 
        </li>
        <li>
          <Link to='/about'>About</Link> 
        </li>
        <li>
          <Link to='/contact'>Contact</Link>  
        </li>
        <li>
          <Link to='/book'>Book List</Link>  
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/book" element={<BookList/>}/>
        <Route path="/book/:id" element={<Book/>}/> */}
        <Route path="*" element={<NotFound/>}/>

      {/* NESTED ROUTES */}
      <Route path="/book">
        <Route index element={<BookList/>}/>
        <Route path=":id" element={<Book/>}/>
      </Route>
      {/* NESTED ROUTES */}


      </Routes>
    </>
    
  );
}

export default App;



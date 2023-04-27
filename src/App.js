// import { Component } from 'react';
import './App.css';
import Heading from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./notes";








function App() {
  return (
    <div className="App">
      <Heading/>
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}      <Footer/>

    </div>
  );
}

export default App;



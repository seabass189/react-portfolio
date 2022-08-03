import React from 'react';
import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to='/'>Home</Link><br></br>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<h1>Home!! mimis time</h1>}></Route>
        <Route path='/about' element={<h1>About!! me me me</h1>}></Route>
      </Routes>

      <Main/>
    </div>
  );
}

export default App;

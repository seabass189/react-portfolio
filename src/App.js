import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/about' element={<h1>About!! me me me</h1>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/home' element={<Main />}></Route>
        <Route path='/projects/:id' element={<Project></Project>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

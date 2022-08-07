import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  const [allProjects, setAllProjects] = useState([])

  useEffect(() => {
    fetch('https://seabass189.github.io/React-TodoApp/projects.json')
      .then(res => res.json())
      .then(data => {
        // console.log('url', url);
        console.log(data);
        setAllProjects(data);
        sessionStorage.setItem('projects', JSON.stringify(data));
      })
  }, [])

  // function toggleFavorite(id) {
    //     const updatedArr = allProjects.map(photo => {
    //         if (photo.id === id) {
    //             return { ...photo, isFavorite: !photo.isFavorite }
    //         }
    //         return photo
    //     })

    //     setAllProjects(updatedArr)
    // }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main allProjects={allProjects} />}></Route>
        <Route path='/projects/:id' element={<Project allProjects={allProjects} />}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

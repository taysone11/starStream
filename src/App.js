import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { getFilms } from './API';
import { createContext, useEffect, useState } from 'react';
import f from "./data/film.json"


export const FilmContext = createContext([])

function App() {
  const [films, setFilms] = useState(f)

  async function getList() {
    const list = await getFilms()
    setFilms(list)
    }  


  // useEffect(() => {
  //   getList()
  // }, [])

  
  
  return (
    <FilmContext.Provider value={films}>
      <Router>
        <div className="App">
          <Navbar />
          <AppRouter/>
        </div>
      </Router>
    </FilmContext.Provider> 
  );
}

export default App;

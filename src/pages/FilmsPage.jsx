import React, { useContext, useEffect, useMemo, useState } from 'react'
import FilmCard from '../components/UI/FilmCard/FilmCard'
import styles from './FilmsPage.module.scss'
import { getFilms } from '../API'
import { FilmContext } from '../App'
import ModalFilmCard from '../components/UI/ModalFilmCard/ModalFilmCard'
import '../styles/filmsPage.scss'
import { Transition } from 'react-transition-group'
const FilmsPage = () => {
const films = useContext(FilmContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalFilm,setModalFilm] = useState(null)
  


function getModalFilmCard(film) {
    setModalOpen(true)
    setModalFilm(film)
    
}



function closeModalFilmCard() {
    setModalOpen(false)
  }

  
  return (
    <div className={styles.films_page}>
      <div className={styles.films_list}>
        {/* <button onClick={get} className="bg-white">asdasd</button> */}
        {
          films.map(film => 
            <FilmCard film={film} onClick={() => getModalFilmCard(film)}/>

            )
        }
        <Transition
        in={modalOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
        >
          
          {state => <ModalFilmCard film={modalFilm} closeModal={closeModalFilmCard} className={`modal ${state}`}/>}
        </Transition>
          
      </div>
    </div>
  )
}

export default FilmsPage
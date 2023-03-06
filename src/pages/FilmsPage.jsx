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
  

  useEffect(() => {
    if (modalOpen === 'true') {

    }
  },[modalOpen])

function getModalFilmCard(film) {
    setModalOpen(true)
    setModalFilm(film)
    
}



function closeModalFilmCard() {
    setModalOpen(false)
  }

  window.onclick = (e) => {
    if (e.target === document.querySelector(".modal_bg")) {
        closeModalFilmCard()
    }
  }

  
  return (
    <div className={styles.films_page}>
      <div className={styles.films_list}>
        {/* <button onClick={get} className="bg-white">asdasd</button> */}
        {
          films.map(film => 
            <FilmCard film={film} showModal={() => getModalFilmCard(film)}/>

            )
        }
        <Transition
        in={modalOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
        >
          
          {state => <ModalFilmCard film={modalFilm} 
          closeModal={closeModalFilmCard}
           classNameWindow={`modal_window ${state}`}
           classNameBG={`modal_bg ${state}`}
           />}
        
        </Transition>
          
      </div>
    </div>
  )
}

export default FilmsPage
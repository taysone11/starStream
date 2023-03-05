import React from 'react'
import films from '../../../data/film.json'
import styles from './FilmCard.module.scss'


const FilmCard = ({film, ...props}) => {
  return (
    <div className={styles.card} {...props}  >
      <img src={film.image} alt="" className={styles.poster}  />
    </div>
  )
}

export default FilmCard
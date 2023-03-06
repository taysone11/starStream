import React, { useState } from 'react'
import films from '../../../data/film.json'
import styles from './FilmCard.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
const FilmCard = ({film, showModal}) => {
  const [saved,setSaved] = useState(false)

  

  return (
    <div className={styles.card}   >
      <img src={film.image} alt="" className={styles.poster}  onClick={showModal}/>
      <div className={styles.btn}>
      {
        saved 
        ?<IconButton className={styles.btn_save_done} onClick={() => setSaved(false)}>
        <FavoriteIcon />
      </IconButton>

      :<IconButton className={styles.btn_save} onClick={() => setSaved(true)}>
      <FavoriteBorderIcon />
    </IconButton>
      }
      
      </div>
      
    </div>
  )
}

export default FilmCard
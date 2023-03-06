import React from "react";
import styles from "./ModalFilmCard.module.scss";
import films from "../../../data/film.json";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
const ModalFilmCard = ({ film , closeModal, classNameWindow, classNameBG}) => {

    

  return (
    <div className={classNameBG} >
        <div className={classNameWindow}>
            <div className={styles.modalFilm_card} >
                <div className={styles.film}>
                    <div className={styles.image_wrapper}>
                        <img src={film.image} alt="" className={styles.image} />
                    </div>
                    <div className={styles.about}>
                        <span className={styles.title}>{film.title}</span>
                        <IconButton className={styles.btn_close} onClick={closeModal}>
                            <CloseIcon />
                        </IconButton>
                        <div className={styles.little_inf}>
                            <span>{film.year}</span>
                            <span>{film.rating}</span>
                            <span>{film.genre.join(', ') }</span>
                        </div>
                        <div className={styles.description}>
                            <div>{film.description}</div>
                        </div>
                        <button className={styles.trailer_btn}><div><PlayArrowIcon className={styles.btn_icon}/></div> <div className={styles.btn_text}>WATCH TRAILER</div></button>
                </div>

                </div>
                {/* <div className={styles.film_trailer_box}>
                <div className={styles.trailer_container}>

                </div>
            </div> */}
            </div>  
        </div>
    </div>
        

    
  );
};

export default ModalFilmCard;

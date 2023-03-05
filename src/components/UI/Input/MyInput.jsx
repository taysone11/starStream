import { IconButton } from '@mui/material'
import React from 'react'
import styles from "./MyInput.module.scss"
import SearchIcon from '@mui/icons-material/Search';
const MyInput = () => {
  return (
    <div className={styles.input_container}>
    
      <SearchIcon className={styles.icon}/>
      <input type="text" placeholder='Search' className={styles.input}/>
    </div>
  )
}

export default MyInput
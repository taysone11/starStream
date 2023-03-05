import React from 'react'
import img from "../../../data/images/images.jfif"
import styles from "./ProfileIcon.module.scss"



const ProfileIcon = () => {
  return (
    <div className={styles.profileIcon_container}>
        <img src={img} alt="profile icon" className={styles.profileIcon}/>
    </div>
  )
}

export default ProfileIcon
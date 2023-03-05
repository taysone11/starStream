import React, { useState } from 'react'
import img from "../../data/images/ss-logo1.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton} from '@mui/material';
import MyInput from '../UI/Input/MyInput';
import styles from './Navbar.module.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ProfileIcon from '../UI/profileIcon/ProfileIcon';
import { Link } from 'react-router-dom';

const PAGES = [ 
  {
    id: 1,
    name:'Home',
    path:'/',
   
  },
  {
    id: 2,
    name:'Films',
    path:'/films',
    
    
  },
  {
    id: 3,
    name:'My films',
    path:'/myfilms',
    
  },
]


const Navbar = () => {
  const [selected,setSelected] = useState(0)
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} >
        <img src={img} className={styles.img} alt="logo"/>
      </div>
      {/* <MyInput/> */}
      <div className={styles.pages}>
    {
     PAGES.map((page,index)=> 
      <Link className={selected===index? styles.active_page:''}
      onClick={() => setSelected(index)}
      to={page.path}
      key={page.path}
      >{page.name}</Link>
      ) 
    }
      <IconButton>
      <SearchIcon className={styles.icon}/>
    </IconButton>
      </div>
    <div className={styles.system_button}>
    <IconButton >
      <NotificationsNoneIcon className={styles.icon}/>
    </IconButton>
    <ProfileIcon/>
    </div>

    </nav>
  )
}

export default Navbar
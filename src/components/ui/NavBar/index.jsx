import React from 'react';
import styles from "./NavBar.module.scss";

import { AiFillHome, AiFillHeart, AiFillShopping } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <ul>
        <Link to="/home" className={styles.active}><li><AiFillHome /></li></Link>
        <Link to="/liked"><li><AiFillHeart /></li></Link>
        <Link to="/cart"><li><AiFillShopping /></li></Link>
        <Link to="/notifications"><li><IoNotifications /></li></Link>
      </ul>
    </div>
  )
}

export default NavBar
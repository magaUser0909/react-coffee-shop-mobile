import React from 'react';
import styles from "./HeaderSearchField.module.scss";

import {FiSearch} from "react-icons/fi";

const HeaderSearchField = () => {
  return (
    <div className={styles.headerSearchField}>
      <div className={styles.searchIcon}><FiSearch /></div>
      <input type="text" placeholder='Search coffee' />
      <button className={styles.btnSortIcon}><div></div></button>
    </div>
  )
}

export default HeaderSearchField
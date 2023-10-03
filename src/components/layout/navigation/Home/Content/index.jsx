import React from 'react';
import styles from "./HeaderContent.module.scss";

import { BsChevronDown } from "react-icons/bs";

import HeaderSearchField from "./HeaderSearchField";
import HeaderPromo from "./HeaderPromo";

const HeaderContent = () => {
  return (
    <header className={styles.headerContent}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.location}>
            <div className={styles.title}>Location</div>
            <div className={styles.address}>
              Bilzen, Tanjungbalai <BsChevronDown />
            </div>
          </div>
          <div className={styles.profileImage}></div>
        </div>
        <HeaderSearchField />
        <HeaderPromo />
      </div>
    </header>
  )
}

export default HeaderContent
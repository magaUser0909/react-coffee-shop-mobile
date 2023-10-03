import React from 'react';
import styles from "./HeaderPromo.module.scss";

const HeaderPromo = () => {
  return (
    <div className={styles.headerPromo}>
      <div className={styles.title}>Promo</div>
      <div className={styles.text}><span>Buy one get  one FREE</span></div>
    </div>
  )
}

export default HeaderPromo
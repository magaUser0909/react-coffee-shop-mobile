import React from 'react';
import styles from "./HomeFilter.module.scss";

const HomeFilter = () => {
  return (
    <div className={styles.homeFilter}>
      <ul>
        <li className={styles.active}>Cappuccino</li>
        <li>Machiato</li>
        <li>Latte</li>
        <li>Americano</li>
      </ul>
    </div>
  )
}

export default HomeFilter
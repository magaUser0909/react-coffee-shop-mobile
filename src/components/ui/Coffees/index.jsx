import React from 'react';
import styles from "./Coffees.module.scss";

import Coffee from './Coffee';

const Coffees = ({ items }) => {
  return (
    <div className={styles.coffees}>
      {items.map(item => (
        <Coffee item={item} key={item._id}/>
      ))}
    </div>
  )
}

export default Coffees
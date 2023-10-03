import React from 'react';
import styles from "./Coffee.module.scss";

import { Link } from 'react-router-dom';

import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';

const Coffee = ({ item }) => {
  return (
    <div className={styles.coffee}>
      <Link to={`/home/${item._id}`} className={styles.head} title='Перейти на страницу'>
        <img src={item.url} alt="" />
        <div className={styles.rate}><span><AiFillStar /></span> {item.rate}</div>
      </Link >
      <div className={styles.desc}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.ingredient}>with <span>{item.ingredient}</span></div>
        <div className={styles.basement}>
          <div className={styles.price}>${item.price}</div>
          <button className={styles.btnAdd}><AiOutlinePlus /></button>
        </div>
      </div>
    </div>
  )
}

export default Coffee